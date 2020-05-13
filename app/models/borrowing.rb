class Borrowing < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :time, precense :true
  validates :book, precense :true
end
