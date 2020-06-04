require 'rails_helper'

RSpec.describe Category, type: :model do
    let (:valid_attributes){
        {:name => "Computação"}
    }

    let (:invalid_attributes){
        {:name => "C0mput4ça0"}
    }

    let (:invalid_attributes2){
        {:name => " "}
    }

    let (:nil_attributes){
        {:name => nil}
    }

    it "is valid with valid attributes" do
        category = Category.create(valid_attributes)
        expect(category).to  be_valid
    end

    context "in order to create name field" do
        it "is not valid with nil attribute" do
            category = Category.create(nil_attributes)
            expect(category).to_not be_valid
        end
        
        it "is not valid without any character" do
            category = Category.create(invalid_attributes2)
            expect(category).to_not be_valid
        end

        it "is not valid with numbers in attribute" do
            category = Category.create(invalid_attributes)
            expect(category).to_not be_valid
        end
    end
    
    it "is valid if uniqueness" do
        category1 = Category.create(valid_attributes)
        category2 = Category.create(valid_attributes)
        expect(category2).to_not be_valid
    end
end
