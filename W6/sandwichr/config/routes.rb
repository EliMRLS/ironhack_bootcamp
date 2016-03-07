Rails.application.routes.draw do
  # resources :ingredients
  resources :sandwiches do
    resources :ingredients, only: [:index, :create]
    post 'sandwiches/:id/ingredients/add', to: 'ingredients#add'
    # resources :sandwich_ingredients, only:[:index, :create]
  end
  
end
