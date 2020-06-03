class Book < ApplicationRecord
  belongs_to :category
  belongs_to :user

  has_one :borrowing, dependent: :destroy
  has_many :interests, dependent: :destroy
  has_one_attached :image

  validates :name, presence: true
  validates :author, presence: true
  validates :edition, presence: true
  validates :category_id, presence: true
  validates :user_id, presence: true
end
