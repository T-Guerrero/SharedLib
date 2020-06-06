require 'rails_helper'
assets_dir = Rails.root.join("app/assets")

RSpec.describe Book, type: :model do
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
        :user => @user,
        :category => @category
        }
    }

    let (:valid_attributes_book2) {
        {
        :name => "Algorithms",
        :author => "Robert Sedgewick",
        :edition => "",
        :user => @user,
        :category => @category
        }
    }

    let (:nil_name_attributes_book) {
        {
        :name => nil,
        :author => "Paulo Feofiloff",
        :edition => "",
        :user => @user,
        :category => @category
        }
    }

    let (:nil_author_attributes_book) {
        {
        :name => "Algoritmos em C",
        :author => nil,
        :edition => "",
        :user => @user,
        :category => @category
        }
    }

    let (:invalid_author_attributes_book) {
        {
        :name => "Algoritmos em C",
        :author => "P4ul0 Fe0f1loff",
        :edition => "",
        :user => @user,
        :category => @category
        }
    }

    let (:nil_user_attributes_book) {
        {
        :name => "Algoritmos em C",
        :author => "Paulo Feofiloff",
        :edition => "",
        :user => nil,
        :category => @category
        }
    }

    let (:nil_category_attributes_book) {
        {
        :name => "Algoritmos em C",
        :author => "Paulo Feofiloff",
        :edition => "",
        :user => @user,
        :category => nil
        }
    }
    
    before do
        @user = User.create(valid_attributes_user)
        @category = Category.create(valid_attributes_category)
    end

    it "is valid with valid attributes" do
        book = Book.create(valid_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to be_valid
    end
    
    it "is not valid without name field" do
        book = Book.create(nil_name_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to_not be_valid
    end
    
    it "is not valid without author name field" do
        book = Book.create(nil_author_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to_not be_valid
    end
    
    it "is not valid with invalid author name attribute" do
        book = Book.create(invalid_author_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to_not be_valid
    end
    
    it "is not valid without user owner reference field" do
        book = Book.create(nil_user_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to_not be_valid
    end
    
    it "is not valid without category reference field" do
        book = Book.create(nil_category_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        expect(book).to_not be_valid
    end
    
    it "is not valid without picture" do
        book = Book.create(valid_attributes_book)
        book.valid?
        expect(book.errors[:image]).to include("must be attached.")
    end

    it "is not valid in formats other than jpeg, jpg and png" do
        book = Book.create(valid_attributes_book)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/svgFormat.svg"), filename: "svgFormat.svg")
        book.valid?
        expect(book.errors[:image]).to include("must be a JPEG, JPG or PNG.")
    end

    it "is valid if delete the dependent interests" do
        book = Book.new(valid_attributes_book)
        book2 = Book.new(valid_attributes_book2)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        book2.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        book.save
        book2.save
        interest1 = Interest.create(user: @user, book: book)
        interest2 = Interest.create(user: @user, book: book2)
        expect{book.destroy}.to change{Interest.count}.by(-1)
    end
    
    it "is valid if delete the dependent borrowing" do
        book = Book.new(valid_attributes_book)
        book2 = Book.new(valid_attributes_book2)
        book.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        book2.image.attach(io: File.open("#{assets_dir}/rspec_images/teste.jpg"), filename: "teste.jpg")
        book.save
        book2.save
        borrowing = Borrowing.create(user: @user, book: book, deadline: DateTime.now()+10.minutes)
        borrowing = Borrowing.create(user: @user, book: book2, deadline: DateTime.now()+10.minutes)
        expect{book.destroy}.to change{Borrowing.count}.by(-1)
    end
end
