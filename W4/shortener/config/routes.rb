Rails.application.routes.draw do

  get '/' => 'links#index'

  post '/newlink' => 'links#create'

  # get '/:shortlink' => 'links#get_original'

end
