class Product < ActiveRecord::Base

  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :deadline, presence: true
  validates :user_id, presence: true
  

end
