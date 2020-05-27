class Borrowing < ApplicationRecord
  belongs_to :user
  belongs_to :book

  #validates :time, presence: true
  validates :book, presence: true
end
