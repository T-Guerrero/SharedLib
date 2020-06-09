class Book < ApplicationRecord
  belongs_to :category
  belongs_to :user

  has_one :borrowing, dependent: :destroy
  has_many :interests, dependent: :destroy
  has_one_attached :image

  validates :name, presence: true, length: {minimum:5}
  validates :author, presence: true, length: {minimum:3}, format: { with: /\A[[:alpha:] ,-.]+\z/, message: "character not allowed" }
  validates :year, presence: true, length: {minimum:4}
  validates :category_id, presence: true
  validates :user_id, presence: true
  #validate :include_image
  
  private
  
  def include_image
    if  image.attached? && !image.content_type.in?(%w(image/jpeg image/jpg image/png))
      errors.add(:image, 'must be a JPEG, JPG or PNG.')
    elsif !image.attached?
      errors.add(:image, 'must be attached.')
    end
  end
end
  