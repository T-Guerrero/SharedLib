require 'rails_helper'

RSpec.describe "Borrowings", type: :request do
    context "post #create" do
        it "create the borrowing in the data base if in a valid environment" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't create the borrowing if a borrowing already exists" do
            pending "add some examples to (or delete) #{__FILE__}"
        end

        it "doesn't create the borrowing if the book belongs to the user" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't create the borrowing if the interest list isn't empty" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    
    context "delete #destroy" do
        it "remove the borrowing if is the borrowing owner who is trying to remove" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    
end
