class Transition < ApplicationRecord
  belongs_to :oldUser, class_name: "User"
  belongs_to :newUser, class_name: "User"
  belongs_to :book

  validates :oldUser, presence: true
  validates :newUser, presence: true
  validates :book, presence: true
end
