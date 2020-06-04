require 'rails_helper'

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

    let (:invalid_name_attributes_user) {
        {
            name: 'b4r',
            email: 'tjbpena@gmail.com',
            phone: '(11) 97982-9433',
            password: "123456",
            password_confirmation: "123456"
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
end
