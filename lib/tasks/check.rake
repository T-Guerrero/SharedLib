namespace :check do
    desc 'Faz a checagem se o tempo máximo de empréstimo do livro
    já passou, se sim, cria  tabela de transição para o próximo empréstimo'
    task :borrowings_deadline => :environment do
        puts "Task 'Borrowings_deadline' called at #{Time.now}" #Log info
        Book.all.each do |book|
            if (!book.borrowing.nil?)
                borrowing = book.borrowing
                if (borrowing.deadline < DateTime.now)
                    book.borrowed = false
                    book.save
                    transitionCreate(borrowing.id)
                    borrowing.destroy
                end
            end
        end
    end

    # desc 'Cria o empréstimo dos livros que não tem um empréstimo ativo'
    # task :borrowings_create => :environment do
    #     puts "Task 'Borrowings_create' called at #{Time.now}" #Log info
    #     Book.all.each do |book|
    #         borrowingCreate(book.id)
    #     end
    # end

    def transitionCreate(borrowing_id)
        #Cria, através da lista de interesse, a tabela de transição para o pŕoximo empréstimo
        @borrowing = Book.find(borrowing_id)
        @book = @borrowing.book
        if (!@book.interests.empty?)
            #Pega o primeiro da lista de interesse
            @interest = @book.interests.order('created_at ASC').first
            @transition = Transition.new()
            @transition.book = @book
            @transition.oldUser = @borrowing.user
            @transition.newUser = @interest.user
            @transition.deadline = DateTime.now()+1.day
            @interest.destroy
            @transition.save
            @book.borrowing = nil
        end
    end
end