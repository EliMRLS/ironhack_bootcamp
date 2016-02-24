class LinksController < ApplicationController

  def index
    binding.pry
    @links = Link.all
  end

  def create
    @short_url = Link.short
    # Create new link from params
    link = Link.new(
      :original_url => params[:original_url],
      :short_url => @short_url)

     # Save the link
    link.save

    # Show new link + short url
    redirect_to('/')
  end



end
