require 'rails_helper'

RSpec.describe "Api::Interests", type: :request do
    context "post #create" do
        it "create the interest in the database if in a valid environment" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't create the interest if the book belongs to the user" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't create the interest if the interest list is empty and the book isn't borrowed" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't create the interest if the user already has the borrowing" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    
    context "delete #destroy" do
        it "remove the interest in the database if is the interest owner who is trying to remove" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        
        it "doesn't remove the interest if isn't the interest owner who is trying to remove" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end

    
    
end
