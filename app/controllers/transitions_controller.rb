class TransitionsController < ApplicationController
    def create
        @book = Book.find(params[:book_id])
        if ((@book.borrowing.nil? && @book.interests.empty?) && @book.user != current_user)
            borrowings = current_user.interests.count + current_user.borrowings.count
            borrowings += current_user.myTransitions.count + current_user.transitions.count
            if (current_user.max_borrowings - borrowings > 0)
                #O usuário ainda tem empréstimos para pegar
                @transition =  Transition.new()
                @transition.book = @book
                @transition.deadline = DateTime.now()+1.day
                @transition.oldUser = @book.user
                @transition.newUser = current_user
                @transition.save
            end
        end
        redirect_to book_path(@book)
    end

    def destroy
        @transition = Transition.find(params[:id])
        borrowingCreate
        @transition.destroy
    end
end

private
    def borrowingCreate
        @book = @transition.book
        @borrowing = Borrowing.new()
        @borrowing.book = @book
        @borrowing.deadline = DateTime.now()+3.minutes
        @Borrowing.user = @transition.newUser
        @book.borrowing = @borrowing
        @borrowing.save
        @book.borrowed = true
        @book.save
        UserMailer.with(borrowing: @borrowing).borrowing_create.deliver
    end
