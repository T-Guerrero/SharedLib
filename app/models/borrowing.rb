class Borrowing < ApplicationRecord
  belongs_to :user

  validates :time, precense :true
  validates :book, precense :true
end
