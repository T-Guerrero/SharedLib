class Book < ApplicationRecord
  belongs_to :category
  belongs_to :user


  has_many :interest

  validates :name, precense :true
  validates :autor, precense :true
  validates :borrowed, precense :true

end
