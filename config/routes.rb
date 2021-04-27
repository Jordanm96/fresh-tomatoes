Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify' 
  
  resources :reviews, only: [:create, :destroy]
  resources :movies, except: :destroy
  resources :users, only: :create
end
