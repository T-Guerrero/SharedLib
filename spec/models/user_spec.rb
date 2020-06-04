require 'rails_helper'

RSpec.describe User, type: :model do
    it "is valid with valid attributes" do
        pending "add some examples to (or delete) #{__FILE__}"
    end

    it "is not valid without name" do
        user = User.new(name: nil)
        user.valid?
        expect(user.errors[:name]).to include("can't be blank") 
    end

    it "is not valid with invalid name attribute" do
        pending "add some examples to (or delete) #{__FILE__}"
    end
end
