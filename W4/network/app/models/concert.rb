class Concert < ActiveRecord::Base

  has_many :comments

  validates :artist, presence: true
  validates :venue, presence: true
  validates :city, presence: true
  validates :date, presence: true
  validates :price, presence: true
  validates :description, presence: true
  validates :time, presence: true


def self.todays_concerts
  where('date BETWEEN ? AND ?', Time.now.strftime("%Y-%m-%d"), Time.now.strftime("%Y-%m-%d"))
end

def self.next_concerts
  from = Date.tomorrow.to_date
  to = from.end_of_month

  concerts = Concert.all.where(date: from..to)
end
  
  

end



