require 'rails_helper'
assets_dir = Rails.root.join("app/assets")

RSpec.describe Borrowing, type: :model do
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

    let(:valid_attributes_borrowing){
        {
            user: @user,
            book: @book,
            deadline: DateTime.now()+10.minutes
        }
    }

    let(:nil_user_attributes_borrowing){
        {
            user: nil,
            book: @book,
            deadline: DateTime.now()+10.minutes
        }
    }

    let(:nil_book_attributes_borrowing){
        {
            user: @user,
            book: nil,
            deadline: DateTime.now()+10.minutes
        }
    }

    before do
        @user = User.create(valid_attributes_user)
        @category = Category.create(valid_attributes_category)
        @book = Book.create(valid_attributes_book)
        @book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
    end

    it "is valid with valid attributes" do
        borrowing = Borrowing.create(valid_attributes_borrowing)
        expect(borrowing).to be_valid
    end

    it "is not valid without user references field" do
        borrowing = Borrowing.create(nil_user_attributes_borrowing)
        expect(borrowing).to_not be_valid
    end
    
    it "is not valid without book references field" do
        borrowing = Borrowing.create(nil_book_attributes_borrowing)
        expect(borrowing).to_not be_valid
    end
end
