require 'rails_helper'
assets_dir = Rails.root.join("app/assets")

RSpec.describe User, type: :model do
    let (:valid_attributes_user) {
        {
            name: 'Thiago Pena',
            email: 'tjbpena@gmail.com',
            phone: '(11) 97982-9433',
            password: "123456",
            password_confirmation: "123456"
        }
    }

    let (:valid_attributes_user2) {
        {
            name: 'Thiago Guerrero',
            email: 'guerrero@gmail.com',
            phone: '(11) 22222-2222',
            password: "123456",
            password_confirmation: "123456"
        }
    }

    let (:invalid_name_attributes_user) {
        {
            name: 'b4r',
            email: 'tjbpena@gmail.com',
            phone: '(11) 97982-9433',
            password: "123456",
            password_confirmation: "123456"
        }
    }

    let (:invalid_phone_attributes_user) {
        {
            name: 'Thiago Pena',
            email: 'tjbpena@gmail.com',
            phone: '(11).97982~9433',
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

    let (:valid_attributes_book2) {
        {
        :name => "Algorithms",
        :author => "Robert Sedgewick",
        :edition => "",
        year: 2010,
        :user => @user,
        :category => @category
        }
    }

    it "is valid with valid attributes" do
        user = User.create(valid_attributes_user)
        expect(user).to be_valid
    end
    
    it "is not valid without name" do
        user = User.new(name: nil)
        user.valid?
        expect(user.errors[:name]).to include("can't be blank")
    end
    
    it "is not valid with invalid name attribute" do
        user = User.create(invalid_name_attributes_user)
        expect(user).to_not be_valid
    end
    
    it "is not valid with invalid phone attribute" do
        user = User.create(invalid_phone_attributes_user)
        expect(user).to_not be_valid
    end

    context "in order to test the dependent fields" do
        before do
            @user = User.create(valid_attributes_user)
            @category = Category.create(valid_attributes_category)
            @user2 = User.create(valid_attributes_user2)
            @book =  Book.create(valid_attributes_book)
            @book2 = Book.create(valid_attributes_book2)
            @book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
            @book2.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        end

        it "is valid if delete the dependent interests" do
            interest1 = Interest.create(user: @user2, book: @book)
            interest2 = Interest.create(user: @user2, book: @book2)
            expect{@user2.destroy}.to change{Interest.count}.by(-2)
        end
    
        it "is valid if interest list is deleted with the user" do
            borrowing1 = Borrowing.create(user: @user2, book: @book, deadline: DateTime.now()+10.minutes)
            borrowing2 = Borrowing.create(user: @user2, book: @book2, deadline: DateTime.now()+10.minutes)
            expect{@user2.destroy}.to change{Borrowing.count}.by(-2)
        end
    end 
end
