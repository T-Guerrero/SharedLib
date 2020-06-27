class Api::BooksController < ApplicationController
    def index
        @books = Book.all
        @my_books = Book.where('user_id = :this_user_id', this_user_id: current_user.id)
        @books_from_others = Book.where('user_id != :this_user_id', this_user_id: current_user.id)
    end

    def show
        @book = Book.find(params[:id])
    end

    def destroy
        @book = Book.find(params[:id])
        if (@book.borrowing.nil? && @book.transition.nil? && @book.user == current_user)
            if (@book.available)
                @book.user.max_borrowings -= 1
            end
            @book.user.save
            @book.destroy
        end
    end
end
