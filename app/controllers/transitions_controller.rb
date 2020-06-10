class TransitionsController < ApplicationController
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
                    @transition.deadline = DateTime.now()+1.day
                    @transition.oldUser = @book.user
                    @transition.newUser = current_user
                    @transition.save
                end
            end
        end
        redirect_to book_path(@book)
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
        @borrowing = Borrowing.new()
        @borrowing.book = @book
        @borrowing.deadline = DateTime.now()+3.minutes
        @Borrowing.user = @transition.newUser
        @book.borrowing = @borrowing
        @book.borrowed = true
        @borrowing.save
        @book.save
        UserMailer.with(borrowing: @borrowing).borrowing_create.deliver
    end
