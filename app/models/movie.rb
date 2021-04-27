class Movie < ApplicationRecord
  belongs_to :user
  has_many :reviews

  validates :title, presence: true, uniqueness: true
  validates :director, presence: true
  validates :info, presence: true
  validates :image_url, presence: true
end
