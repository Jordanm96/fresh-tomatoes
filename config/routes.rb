Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :reviews, only: :destroy
  resources :movies, except: [:destroy] do
    resources :reviews, only: :create
  end
  resources :users, only: :create
  
end
