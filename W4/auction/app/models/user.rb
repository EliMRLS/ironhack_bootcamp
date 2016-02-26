class User < ActiveRecord::Base

  has_many :products

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true

 
end
