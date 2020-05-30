class InterestsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if (@book.borrowing.nil? || @book.borrowing.user != current_user)
            #O usuário que está com o livro emprestado não pode declarar interesse
            @interest = @book.interests.create()
            @interest.user = current_user
            @interest.save
        end
        redirect_to book_path(@book)
    end

    def destroy
        @book = Book.find(params[:book_id])
        @interest = @book.interests.find(params[:id])
        if (@interest.user == current_user)
            #Somente o usuário pode deletar o seu próprio interesse
            @interest.destroy
        end
        redirect_to book_path(@book)
    end
end