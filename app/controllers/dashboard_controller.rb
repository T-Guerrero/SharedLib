class DashboardController < ApplicationController
    def index
        load_my_books
    end

    private

    def load_my_books
        @my_books = current_user.books
    end

    def my_borrowings


    end

    def my_interests
        # current_user.Interests
    end

    def others_interests
    end
end
