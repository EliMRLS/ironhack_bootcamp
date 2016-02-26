class Comment < ActiveRecord::Base

  belongs_to :concert

  validates :name, presence: true
  validates :opinion, presence: true  

end
