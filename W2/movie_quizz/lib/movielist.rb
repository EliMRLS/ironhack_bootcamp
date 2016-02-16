require 'pry'

class MovieList

  attr_reader :movies
  def initialize(search)
    @movies = search
    @questions = ["year", "director"]
  end

  def select_random_film
    n = rand(9)
    @movies[n]
  end

   def select_random_question
    n = rand(2)
    @questions[n]
  end

end
