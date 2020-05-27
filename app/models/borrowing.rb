class Borrowing < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :deadline, presence: true
  vaidates :user_id, presence: true
  validates :book, presence: true
end
