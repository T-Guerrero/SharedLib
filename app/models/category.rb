class Category < ApplicationRecord
	has_many :books

	validates :name, presence: true, uniqueness: true, length: {minimum:5}, format: { with: /\A[[:alpha:] ]+\z/, message: "only allows letters" }

end
