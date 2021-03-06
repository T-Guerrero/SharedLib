class Api::TransitionsController < ApplicationController
    def index
        @transitions = Transition.where(newUser: current_user)
    end

    def create
        @book = Book.find(params[:book_id])
        if (@book.borrowing.nil? && @book.transition.nil? && @book.interests.empty?)
            if (@book.user != current_user)
                borrowings = current_user.interests.count + current_user.borrowings.count
                borrowings += current_user.myTransitions.count + current_user.transitions.count
                if (current_user.max_borrowings - borrowings > 0)
                    #O usuário ainda tem empréstimos disponíveis
                    @transition =  Transition.new()
                    @transition.book = @book
                    @transition.deadline = DateTime.now()+3.minutes
                    @transition.oldUser = @book.user
                    @transition.newUser = current_user
                    @transition.save
                    render json: {status: "success", message: "Transição criada com sucesso! Acesse o seu perfil para ver mais"}
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
        @transition = Transition.find(params[:id])
        borrowing_create
        @transition.destroy
    end
end

private
    def borrowing_create
        @book = @transition.book
        if (@transition.newUser != @book.user)
            @borrowing = Borrowing.new()
            @borrowing.book = @book
            @borrowing.deadline = DateTime.now()+3.minutes
            @borrowing.user = @transition.newUser
            @book.borrowing = @borrowing
            @book.borrowed = true
            @borrowing.save
            @book.save
        end
    end
