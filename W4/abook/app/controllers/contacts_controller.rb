class ContactsController < ApplicationController

  def index
    @contacts = Contact.all
  end

  def new
    #qué hay que poner aquí???
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

    # Render contact's attributes
    redirect_to(:text => contact.attributes)
  end

end

