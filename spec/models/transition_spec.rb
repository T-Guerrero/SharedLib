require 'rails_helper'
assets_dir = Rails.root.join("app/assets")

RSpec.describe Transition, type: :model do
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

    let (:valid_attributes_transition){
        {
            book: @book,
            oldUser: @user,
            newUser: @user2,
            deadline: DateTime.now()+1.day
        }
    }

    let (:nil_newUser_attributes_transition){
        {
            book: @book,
            oldUser: @user,
            newUser: nil,
            deadline: DateTime.now()+1.day
        }
    }

    let (:nil_oldUser_attributes_transition){
        {
            book: @book,
            oldUser: nil,
            newUser: @user2,
            deadline: DateTime.now()+1.day
        }
    }

    let (:nil_book_attributes_transition){
        {
            book: nil,
            oldUser: @user,
            newUser: @user2,
            deadline: DateTime.now()+1.day
        }
    }

    before do
        @user = User.create(valid_attributes_user)
        @user2 = User.create(valid_attributes_user2)
        @category = Category.create(valid_attributes_category)
        @book = Book.create(valid_attributes_book)
        @book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
    end

    it "is valid with valid attributes" do
        transition = Transition.create(valid_attributes_transition)
        expect(transition).to be_valid
    end
    
    it "is not valid without newUser references field" do
        transition = Transition.create(nil_newUser_attributes_transition)
        expect(transition).to_not be_valid
    end
    
    it "is not valid without oldUser references field" do
        transition = Transition.create(nil_oldUser_attributes_transition)
        expect(transition).to_not be_valid
    end
    
    it "is not valid without book references field" do
        transition = Transition.create(nil_book_attributes_transition)
        expect(transition).to_not be_valid
    end
end
