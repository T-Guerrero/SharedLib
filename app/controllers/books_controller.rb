class BooksController < ApplicationController
    def index
        @books = Book.all
    end

    def show
        @book = Book.find(params[:id])
    end

    def new
        @book = Book.new
    end

    def edit
        @book = Book.find(params[:id])
    end

    def create
        @category = Category.first
        @book = Book.new(book_params)
        @book.category = @category
        @book.user = current_user
        @book.borrowed = false
        if @book.save
            redirect_to books_path
        else
            render 'new'
        end
    end

    def update
        @book = Book.find(params[:id])
    end

    def destroy
        @book = Book.find(params[:id])
        @book.destroy
    end
end

private

    def book_params
        params.require(:book).permit(:name, :author)
    end
