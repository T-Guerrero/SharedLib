class BooksController < ApplicationController
    def new
        @book = Book.new
    end

    def edit
        @book = Book.find(params[:id])
    end

    def create
        @book = Book.new(book_params)
        @book.user = current_user
        if @book.save
            current_user.max_borrowings += 1
            current_user.save
            redirect_to books_path
        else
            render 'new'
        end
    end

    def update
        @book = Book.find(params[:id])
        if (@book.update(book_params))
            redirect_to @book
        else
            render 'edit'
        end
    end
end

private

    def book_params
        params.require(:book).permit(:name, :author, :edition, :year, :category_id, :image)
    end
