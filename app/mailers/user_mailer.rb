class UserMailer < ApplicationMailer
    default from: ' app176415578@heroku.com'
 
    def welcome_email
        @user = params[:user]
        @url  = 'http://example.com/login'
        mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end

    def new_book
        @book = params[:book]
        @maxBorrowings = @book.user.max_borrowings - (@book.user.interests.count + @book.user.borrowings.count +
        @book.user.myTransitions.count + @book.user.transitions.count)
        mail(to: @book.user.email, subject: 'Livro cadastrado com sucesso!' )
    end

    def newUser_transition_create
        @transition = params[:transition]
        mail(to: @transition.newUser.email, subject: 'Transporte do livro criado com sucesso!')
    end

    def oldUser_transition_create
        @transition = params[:transition]
        mail(to: @transition.oldUser.email, subject: 'IMPORTANTE: Você tem um novo livro para entregar!')
    end
end