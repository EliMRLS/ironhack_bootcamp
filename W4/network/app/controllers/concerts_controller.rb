class ConcertsController < ApplicationController

  def index
    @concerts = Concert.todays_concerts
    @next_concerts = Concert.next_concerts
  end 

  def new
    @concert = Concert.new
  end

  def create
    @concert = Concert.new(entry_params)

    if @concert.save
      redirect_to concerts_path
    else
      render 'new' 
    end

  end

private

  def entry_params
    params.require(:concert).permit(:artist, :venue, :city, :date, :time, :price, :description)
  end

end
