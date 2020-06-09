class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one_attached :photo

  has_many :borrowings, dependent: :destroy
  has_many :books, dependent: :destroy
  has_many :interests, dependent: :destroy
  has_many :myTransitions, class_name: "Transition", foreign_key: "oldUser_id"
  has_many :transitions, class_name: "Transition", foreign_key: "newUser_id"

  validates :name, presence: true, length: {minimum:3}, format: { with: /\A[[:alpha:] ]+\z/, message: "only allows letters" }
  validates :phone, presence: true, uniqueness: true, length: {minimum:11}, format: { with: /\A\(?[0-9]{2}\)? ?[0-9]+-?[0-9]+\z/, message: "special character not allowed" }

end
