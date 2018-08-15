Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # thing routes
  get '/things', to: 'things#index'
  get '/things/:id', to: 'things#show'
  post '/things', to: 'things#create'
  delete '/things/:id', to: 'things#delete'
  put '/things/:id', to: 'things#update'

  # user routes
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'
end
