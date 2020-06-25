class DashboardController < ApplicationController
    def index
        load_my_books
        load_my_borrowings
        load_my_interests
        load_my_transitions
        load_transitions_to_deliver
        load_counters
    end

    private

    def load_my_books
        @my_books = current_user.books.limit(3)
    end

    def load_my_borrowings
        @my_borrowings = current_user.borrowings.limit(3)
    end

    def load_my_interests
        @my_interests = current_user.interests.limit(3)
    end

    def load_my_transitions
        @my_transitions = current_user.transitions.limit(3)
    end

    def load_transitions_to_deliver
        @transitions_to_deliver = Transition.where('oldUser_id = :this_user_id', this_user_id: current_user.id).limit(3)
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
        @transitions_counter = {
            showing: current_user.transitions.limit(3).size(),
            total: current_user.transitions.size()
        }
        @transitions_to_deliver_counter = {
            showing: Transition.where('oldUser_id = :this_user_id', this_user_id: current_user.id).limit(3).size(),
            total: Transition.where('oldUser_id = :this_user_id', this_user_id: current_user.id).size()
        }
        @borrowings_counter = {
            showing: current_user.borrowings.limit(3).size(),
            total: current_user.borrowings.size()
        }
    end
end
