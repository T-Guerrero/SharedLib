class Book < ApplicationRecord
  belongs_to :category
  belongs_to :user

  has_one :borrowing
  has_many :interest
  has_one_attached :image

  validates :name, presence: true
  validates :autor, presence: true
  validates :borrowed, presence: true

end
