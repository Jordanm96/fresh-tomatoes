class MoviesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_movie, only: [:show, :update, :destroy]

  # GET /movies
  def index
    @movies = Movie.all
    render json: @movies.as_json(methods: :rating)
  end

  # GET /movies/1
  def show
    # as_json allows us to include methods
    # :rating method comes from my movie model
    render json: @movie.as_json(include: [{reviews: {include: :user}}, :user], methods: :rating)
  end

  # POST /movies
  def create
    @movie = Movie.new(movie_params)
    @movie.user = @current_user
    if @movie.save
      render json: @movie, status: :created
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :director, :info, :image_url, :user_id)
    end
end
