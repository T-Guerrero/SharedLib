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
  validates :nusp, presence: true, uniqueness: { case_sensitive: false }

  devise :database_authenticatable, :registerable,
      :recoverable, :rememberable, :trackable, 
      :validatable, authentication_keys: [:login]
  attr_writer :login

  def login
    @login || self.nusp || self.email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_h).where(["lower(nusp) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    elsif conditions.has_key?(:nusp) || conditions.has_key?(:email)
      where(conditions.to_h).first
  end
end

end
