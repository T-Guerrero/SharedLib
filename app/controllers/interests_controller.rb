class InterestsController < ApplicationController
    def index
    end

    def create
        @book = Book.find(params[:book_id])
        @interest = @book.interests.create()
        @interest.user = current_user
        @interest.save
        redirect_to book_path(@book)
    end

    def destroy
        @book = Book.find(params[:book_id])
        @interest = @book.interests.find(params[:id])
        if (@interest.user == current_user)
            @interest.destroy
        end
        redirect_to book_path(@book)
    end
end
