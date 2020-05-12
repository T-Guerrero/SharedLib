class Category < ApplicationRecord
	has_many :books

	validates :name, precense :true

end
