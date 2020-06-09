class UserMailer < ApplicationMailer
    default from: 'sharedlib@gmail.com'
 
    def welcome_email
        @user = params[:user]
        @url  = 'http://example.com/login'
        mail(to: @user.email, subject: 'Welcome to My Awesome Site')
    end

    def borrowing_create
        @borrowing = params[:borrowing]
        @user = @borrowing.user
        @url = "/books/#{@borrowing.book.id}"
        mail(to: @user.email, subject: 'Empréstimo gerado com sucesso!')
    end
end
