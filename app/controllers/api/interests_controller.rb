class Api::InterestsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if ((!@book.borrowing.nil? && @book.borrowing.user != current_user) ||
            (!@book.transition.nil? && @book.transition.newUser != current_user))
            #O usuário não está com o livro emprestado
            if (@book.user != current_user)
                #O usuário não é o dono do livro
                borrowings = current_user.interests.count + current_user.borrowings.count
                borrowings += current_user.myTransitions.count + current_user.transitions.count
                if (current_user.max_borrowings - borrowings > 0)
                    #O usuário ainda tem empréstimos disponíveis
                    @interest = @book.interests.create()
                    @interest.user = current_user
                    @interest.save
                    render json: {status:"success"}
                else
                    render json:
                        {
                        status: "error",
                        message: "Você não pode pegar mais nenhum livro emprestado! Seu número máximo de 
                        empréstimos/manifestação de interesses foram atingidos"
                        }
                end
            end
        else
            render json: {status: "error", message: "Ops. Algo deu errado"}
        end
    end

    def destroy
        @book = Book.find(params[:book_id])
        @interest = @book.interests.find(params[:id])
        if (@interest.user == current_user)
            @interest.destroy
        end
    end
end
