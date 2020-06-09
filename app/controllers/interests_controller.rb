class InterestsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if (!@book.borrowing.nil? && (@book.borrowing.user != current_user && @book.user != current_user))
            #O usuário que está com o livro emprestado e o dono do livro não podem declarar interesse
            borrowings = current_user.interests.count + current_user.borrowings.count
            borrowings += current_user.myTransitions.count + current_user.transitions.count
            if (current_user.max_borrowings - borrowings > 0)
                #O usuário ainda tem empréstimos para pegar
                @interest = @book.interests.create()
                @interest.user = current_user
                @interest.save
            end
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
