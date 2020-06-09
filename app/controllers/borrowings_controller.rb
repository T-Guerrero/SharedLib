class BorrowingsController < ApplicationController
    def create
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
        @book.borrowed = false
        @book.save
        @borrowing = @book.borrowing
        redirect_to book_path(@book)
        @borrowing.destroy
    end 
end