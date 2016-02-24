class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def new
    
  end

  def create
    # Create new Contact from params[:contact]
    contact = Contact.new(
      :name => params[:contact][:name],
      :address => params[:contact][:address],
      :phone => params[:contact][:phone],
      :email => params[:contact][:email])

     # Now we save the contact
    contact.save

    # Show index + new contact
    redirect_to('/contacts')
  end

end

