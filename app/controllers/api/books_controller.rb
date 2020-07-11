class Api::BooksController < ApplicationController
    def index
        @books = Book.all
        @my_books = Book.where('user_id = :this_user_id', this_user_id: current_user.id)
        @books_from_others = Book.where('user_id != :this_user_id', this_user_id: current_user.id)
    end

    def show
        @book = Book.find(params[:id])
    end

    def create
        @book = Book.new(book_params)
        @book.user = current_user
        if @book.save
            current_user.max_borrowings += 1
            current_user.save
            render json: {status: "success", id: @book.id}
        else
            render json: {status: "error", message: @book.errors.full_messages}
        end
    end

    def update
        @book = Book.find(params[:id])
        if (@book.update(book_params))
            render json: {status: "success"}
        else
            render json: {status: "error", message: @book.errors.full_messages}
        end
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

private
    def book_params
        params.permit(:id, :name, :author, :edition, :year, :category_id, :image)
    end
