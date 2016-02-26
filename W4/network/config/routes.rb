Rails.application.routes.draw do

  resources :concerts, only: [:index, :new, :create, :show] do
    resources :comments, only: [:new, :create]

  end
end


#             Prefix Verb URI Pattern                                  Controller#Action
#    concert_comments POST /concerts/:concert_id/comments(.:format)     comments#create
# new_concert_comment GET  /concerts/:concert_id/comments/new(.:format) comments#new
#            concerts GET  /concerts(.:format)                          concerts#index
#                     POST /concerts(.:format)                          concerts#create
#         new_concert GET  /concerts/new(.:format)                      concerts#new
#             concert GET  /concerts/:id(.:format)                      concerts#show