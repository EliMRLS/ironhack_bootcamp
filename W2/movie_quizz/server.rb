require 'sinatra'
require_relative './lib/searcher.rb'
require_relative './lib/movielist.rb'

get "/" do  
  erb(:index)
end

post "/trivia" do
  word = params[:term]
  search = Searcher.new.search_by_word(word)

  new_list = MovieList.new(search)
  @question = new_list.select_random_question
  @movies = new_list.movies
  selected_movie = new_list.select_random_film
  @year = selected_movie[:year]
  @director = selected_movie[:director][0]
  
  erb(:trivia)
end
