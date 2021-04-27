Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # In the video, he has :id after reviews. Why don't we have to use :review_id?
  # get '/movies/:movie_id/reviews/:id', to: 'movies#show'
  # get '/movies/:movie_id/reviews/:review_id', to: 'movies#show'
  # Which of these two above do I need to use
  # DO I NEED EITHER OF THOSE?

  resources :reviews, only: [:create, :destroy]
  resources :movies, except: [:destroy]
  resources :users, only: :create
  
end
