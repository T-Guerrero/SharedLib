class Api::BorrowingsController < ApplicationController
    def destroy
        @book = Book.find(params[:book_id])
        return_book
        @book.borrowed = false
        @book.save
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