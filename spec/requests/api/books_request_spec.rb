require 'rails_helper'

RSpec.describe "Api::Books", type: :request do
    context "post #create" do
        it "create the book in the database" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        it "doesn't create the book if the user is not logged" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    context "get #index" do
        it "return all the books in the database" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    
    context "patch #update" do
        it "update the book in the database" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
        it "doesn't update the book in the database with invalid attributes" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
    
    context "delete #destroy" do
        it "remove the book from database" do
            pending "add some examples to (or delete) #{__FILE__}"
        end
    end
end
