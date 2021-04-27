Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # In the video, he has :id after reviews. Why don't we have to use :review_id?
  get '/movies/:movie_id/reviews/:id', to: 'movies#show'
  get '/movies/:movie_id/reviews/:review_id', to: 'movies#show'
  # WHich of these two above do I need to use

  resources :reviews, only: [:create, :destroy]
  resources :movies, except: [:destroy, :show]
  resources :users, only: :create
end
