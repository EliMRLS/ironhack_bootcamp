class ConcertsController < ApplicationController

  def index
    @concerts = Concert.todays_concerts
    @next_concerts = Concert.next_concerts
  end 

  def new
    @concert = Concert.new
  end

  def create
    @concert = Concert.new(concert_params)

    if @concert.save
      flash[:notice] = "Info uploaded successfully"
      redirect_to concerts_path
    else
      flash[:alert] = "Something went wrong"
      render 'new' 
    end

  end

  def show
    @concert = Concert.find_by(id: params[:id])
    @comment_in_bbdd = @concert.comments
    @comment = Comment.new
  end

private

  def concert_params
    params.require(:concert).permit(:artist, :venue, :city, :date, :time, :price, :description)
  end

end
