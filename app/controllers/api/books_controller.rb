class Api::BooksController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def destroy
        @book = Book.find(params[:id])
        if (@book.borrowing.nil? && @book.transition.nil? && @book.user == current_user)
            @book.user.max_borrowings -= 1
            @book.user.save
            @book.destroy
        end
    end
end
