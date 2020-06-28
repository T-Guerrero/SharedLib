class Api::SearchController < ApplicationController
     def index
        @categories = Category.where("name LIKE ?", "%#{params[:query]}%")
        @books = Book.where("name LIKE ?", "%#{params[:query]}%")
        @authors_books = Book.where("author LIKE ?", "%#{params[:query]}%")
    end
end
