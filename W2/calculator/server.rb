require "sinatra"
require_relative "./lib/calculator.rb"

get "/calculator" do
  erb(:calculator)
end

post "/calculate" do
    @first = params[:first_number].to_i
    @second = params[:second_number].to_i
    @calculation = params[:calculation].to_s
    @math = Calculator.new.symbol(@calculation)

    @result = Calculator.new.result(@first,@second,@calculation) 

    erb(:result)
  end

post "/save" do
  @result = params[:result]
  Memory.new.save_memory(@result)
  erb(:calculator)
end