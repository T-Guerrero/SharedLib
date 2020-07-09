class Api::BorrowingsController < ApplicationController
    def destroy
        @book = Book.find(params[:book_id])
        if (params[:type] == "owner")
            take_book_back
        elsif (params[:type] == "user")
            return_book
        end
        @book.borrowed = false
        @book.save
    end
end

private
    def return_book
        # Retorna o livro, ou para o próximo interessado ou para o dono
        @borrowing = @book.borrowing
        @transition = Transition.new()
        @transition.book = @book
        @transition.deadline = DateTime.now()+3.minutes
        @transition.oldUser = @borrowing.user
        if (@book.interests.empty?)
            @transition.newUser = @book.user
        else
            @interest = @book.interests.order('created_at ASC').first
            @transition.newUser = @interest.user
            @interest.destroy
        end
        @transition.save
        @borrowing.destroy
        render json: {status: "success", message: "Transição criada com sucesso! Acesse a sua home para ver mais"}
    end

    def take_book_back
        #Retorna o livro para o dono
        @borrowing = @book.borrowing
        @transition = Transition.new()
        @transition.book = @book
        @transition.deadline = DateTime.now()+3.minutes
        @transition.oldUser = @borrowing.user
        @transition.newUser = @book.user
        @transition.save
        @borrowing.destroy
        @book.available = false
        @book.user.max_borrowings -= 1
        render json: {status: "success", message: "Livro requisitado de volta com sucesso! Acesse o seu perfil para ver mais"}
    end
