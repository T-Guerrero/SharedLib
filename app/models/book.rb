class Book < ApplicationRecord
  belongs_to :category
  belongs_to :user

  has_one :borrowing
  has_many :interests, dependent: :destroy
  has_one_attached :image

  validates :name, presence: true
  validates :author, presence: true
end
