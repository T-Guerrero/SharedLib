class BorrowingsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if @book.borrowing.nil? && @book.interests.empty?
            @borrowing = Borrowing.new()
            @borrowing.book_id = @book.id
            @borrowing.deadline = DateTime.now()+10.minutes
            @borrowing.user = current_user
            @book.borrowing = @borrowing
            @borrowing.save
            @book.borrowed = true
            @book.save
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