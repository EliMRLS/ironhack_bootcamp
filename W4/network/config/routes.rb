Rails.application.routes.draw do

  resources :concerts, only: [:index, :new, :create, :show] do
    resources :comments, only: [:create]

  end
end

