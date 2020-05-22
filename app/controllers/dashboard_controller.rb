class DashboardController < ApplicationController
    def index
        load_my_books
        load_my_interests
    end

    private

    def load_my_books
        @my_books = current_user.books
    end

    def load_my_borrowings


    end

    def load_my_interests
        @my_interests = current_user.interests
    end

    def load_others_interests

    end
end
