namespace :check do
    desc 'Faz três tipos de checagem:
    1 - Checa se o tempo máximo de empréstimo do livro já passou e cria o novo empréstimo ou prolonga o atual
    2 - Checa se o tempo máximo da tabela de transição já passou e aplica as punições e alterações
    3 - Checa se existe interesse mas não existe nenhum empréstimo ou tabela de transição ativa, se sim,
    cria a tabela de transição'
    task :deadline => :environment do
        puts "Task 'Borrowings_deadline' called at #{Time.now}" #Log info
        Book.all.each do |book|
            if (!book.borrowing.nil?)
                borrowing = book.borrowing
                if (borrowing.deadline < DateTime.now)
                    if (!book.interests.empty?)
                        transition_create(book.id)
                        book.borrowed = false
                        book.save
                    else
                        borrowing = DateTime.now()+3.minutes
                    end
                end
            elsif (!book.transition.nil?)
                transition = book.transition
                if (transition.deadline < DateTime.now)
                    transition_deadline(transition.id)
                end
            else
                transition_create(book.id)
            end
        end
    end


    def transition_create(book_id)
        # Cria, através da lista de interesse, a tabela de transição para o pŕoximo empréstimo
        @book = Book.find(book_id)
        @borrowing = @book.borrowing
        if (!@book.interests.empty?)
            @interest = @book.interests.order('created_at ASC').first
            @transition = Transition.new()
            @transition.book = @book
            @transition.deadline = DateTime.now()+1.day
            @transition.newUser = @interest.user
            if (@borrowing.nil?)
                @transition.oldUser = @book.user
            else
                @transition.oldUser = @borrowing.user
                @borrowing.destroy
            end
            @transition.save
            @interest.destroy
        end
    end

    def transition_deadline(transition_id)
        # Aplica as punições para o usuário que estava com o livro e não concluiu a transição e deixa o livro indisponível
        @transition = Transition.find(transition_id)
        @book = @transition.book
        @transition.oldUser.max_borrowings -= 1
        @book.available = false
        @book.save
    end
end