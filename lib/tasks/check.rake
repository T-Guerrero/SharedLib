namespace :check do
    desc 'Faz a checagem se o tempo máximo de empréstimo do livro já passou, se sim, deleta o empréstimo e cria o próximo'
    task :borrowings_deadline => :environment do
        puts "Task 'Borrowings_deadline' called at #{Time.now}" #Log info
        Book.all.each do |book|
            if (!book.borrowing.nil?)
                borrowing = book.borrowing
                if (borrowing.deadline < DateTime.now)
                    book.borrowed = false
                    book.save
                    borrowing.destroy
                end
            end
        end
    end

    desc 'Cria o empréstimo dos livros que não tem um empréstimo ativo'
    task :borrowings_create => :environment do
        puts "Task 'Borrowings_create' called at #{Time.now}" #Log info
        Book.all.each do |book|
            borrowingCreate(book.id)
        end
    end

    def borrowingCreate(book_id)
        #Cria, através da lista de interesse, o próximo empréstimo
        @book = Book.find(book_id)
        if @book.borrowing.nil? && !@book.interests.empty?
            @borrowing = Borrowing.new()
            @borrowing.book_id = @book.id
            @borrowing.deadline = DateTime.now()+10.minutes
            #Pega o primeiro da lista de interesse
            @interest = @book.interests.order('created_at ASC').first
            @borrowing.user = @interest.user
            @interest.destroy

            @book.borrowing = @borrowing
            @borrowing.save
            @book.borrowed = true
            @book.save
        end
    end

end