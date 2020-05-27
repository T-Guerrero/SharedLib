class BorrowingsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if @book.borrowing.nil?
            @borrowing = Borrowing.new()
            @borrowing.book_id = @book.id
            if @book.interests.empty?
                #Lista de interesse vazia
                @borrowing.user = current_user
            else
                #Pega o primeiro da lista de interesse
                @interest = @book.interests.order('created_at ASC').first
                @borrowing.user = @interest.user
                @interest.destroy
            end
            @book.borrowing = @borrowing
            @borrowing.save
            redirect_to book_path(@book)
        else
            redirect_post(book_interests_path(@book), options: {authenticity_token: :auto})
        end
    end

    def destroy
        @book = Book.find(params[:book_id])
        @borrowing = @book.borrowing
        #Para testar, vamos sempre recriar o interesse após deletar o borrowing
        test_createInterest(@borrowing.user)
        @borrowing.destroy
        #redirect_to book_path(@book)
    end 

end

private
    def test_createInterest(user)
        @book = Book.find(params[:book_id])
        @interest = @book.interests.create()
        @interest.user = user
        @interest.save
        redirect_to book_path(@book)
    end
