Rails.application.routes.draw do

  resources :site, only: [:index]
  get '/products' => 'products#all'
  resources :users, only: [:show, :create, :destroy] do
    resources :products, only: [:index, :new, :show, :create, :destroy]

  end

end

