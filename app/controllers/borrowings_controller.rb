class BorrowingsController < ApplicationController
    def create
        #OBS: Método criado somente para testes, não existirá no final
        @book = Book.find(params[:book_id])
        if ((@book.borrowing.nil? && @book.interests.empty?) && @book.user != current_user)
            borrowings = current_user.interests.count + current_user.borrowings.count
            borrowings += current_user.myTransitions.count + current_user.transitions.count
            if (current_user.max_borrowings - borrowings > 0)
                #O usuário ainda tem empréstimos para pegar
                @borrowing = Borrowing.new()
                @borrowing.book_id = @book.id
                @borrowing.deadline = DateTime.now()+3.minutes
                @borrowing.user = current_user
                @book.borrowing = @borrowing
                @borrowing.save
                @book.borrowed = true
                @book.save
                UserMailer.with(borrowing: @borrowing).borrowing_create.deliver
            end
        end
        redirect_to book_path(@book)
    end

    def destroy
        @book = Book.find(params[:book_id])
        return_book
        @book.borrowed = false
        @book.save
        redirect_to book_path(@book)
    end 
end

private
    def return_book
        # Retorna o livro, ou para o próximo interessado ou para o dono
        @borrowing = @book.borrowing
        @transition = Transition.new()
        @transition.book = @book
        @transition.deadline = DateTime.now()+1.day
        @transition.oldUser = @borrowing.user
        if (@book.interests.empty?)
            @transition.newUser = @book.user
        else
            @interest = @book.interests.order('created_at ASC').first
            @transition.newUser = @interest.user
            @interest.destroy
        end
        @transition.save
        @borrowing.destroy
    end