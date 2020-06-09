require 'rails_helper'
assets_dir = Rails.root.join("app/assets")

RSpec.describe Interest, type: :model do
    let (:valid_attributes_user) {
        {
            name: 'Thiago Pena',
            email: 'tjbpena@gmail.com',
            phone: '(11) 97982-9433',
            password: "123456",
            password_confirmation: "123456"
        }
    }
    
    let (:valid_attributes_category){
        {
            name: "Computação"
        }
    }

    let (:valid_attributes_book) {
        {
        :name => "Algoritmos em C",
        :author => "Paulo Feofiloff",
        :edition => "",
        year: 2010,
        :user => @user,
        :category => @category
        }
    }

    let (:valid_attributes_interest1){
        {
            user: @user,
            book: @book1
        }
    }

    let (:valid_attributes_interest2){
        {
            user: @user,
            book: @book2
        }
    }

    let (:nil_user_attributes_interest){
        {
            user: nil,
            book: @book1
        }
    }
    let (:nil_book_attributes_interest){
        {
            user: @user,
            book: nil
        }
    }

    before do
        @user = User.create(valid_attributes_user)
        @category = Category.create(valid_attributes_category)
        @book1 = Book.create(valid_attributes_book)
        @book1.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        @book2 = Book.create(valid_attributes_book)
        @book2.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
    end

    it "is valid with valid attributes" do
        interest = Interest.create(valid_attributes_interest1)
        expect(interest).to be_valid
    end

    it "is not valid without user refence field" do
        interest = Interest.create(nil_user_attributes_interest)
        expect(interest).to_not be_valid
    end
    
    it "is not valid without book refence field" do
        interest = Interest.create(nil_book_attributes_interest)
        expect(interest).to_not be_valid
    end

    it "is not valid if user can create two interests in the same book" do
        interest1 = Interest.create(valid_attributes_interest1)
        interest2 = Interest.create(valid_attributes_interest1)
        expect(interest2).to_not be_valid
    end
    
    it "is valid if user can create two interests in different books" do
        interest1 = Interest.create(valid_attributes_interest1)
        interest2 = Interest.create(valid_attributes_interest2)
        expect(interest2).to be_valid
    end
end
