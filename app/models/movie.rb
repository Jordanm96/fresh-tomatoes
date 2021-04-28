class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews

  def rating 
    (reviews.average(:rating).to_f * 20).to_i
  end

  validates :title, presence: true, uniqueness: true
  validates :director, presence: true
  validates :info, presence: true
  validates :image_url, presence: true
end
