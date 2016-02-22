Rails.application.routes.draw do

  get'/' => 'contacts#index'

  get'/contacts' => 'contacts#index'

  get'/contacts/new' => 'contacts#new'

  post("/contacts", :to => "contacts#create")

end
