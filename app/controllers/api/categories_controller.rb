class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
    end

    def show
        @category = Category.find(params[:id])
        @category_books = Book.where('category_id = :this_category_id', this_category_id: params[:id])
    end

end
