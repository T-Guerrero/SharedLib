class DashboardController < ApplicationController
    def index
        load_my_books
        load_my_interests
        load_counters
    end

    private

    def load_my_books
        @my_books = current_user.books.limit(3)
    end

    def load_my_borrowings


    end

    def load_my_interests
        @my_interests = current_user.interests.limit(3)
    end

    def load_others_interests

    end

    def load_counters
        @book_counter = {
            showing: current_user.books.limit(3).size(),
            total: current_user.books.size()
        }
        @interest_counter = {
            showing: current_user.interests.limit(3).size(),
            total: current_user.interests.size()
        }
    end
end
