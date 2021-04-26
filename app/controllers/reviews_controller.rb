class ReviewsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_review, only: [:show, :update, :destroy]

  # DO I NEED ALL THESE ROUTES HERE OR CAN I JUST DO THE INCLUDE: :IN MOVIES
  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)
    @review.user = @current_user
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  def add_review
    @movie = Movie.find(params[:movie_id])
    @review = Review.find(params[:id])

    @movie.reviews.push(@review)

    render json: @movie, include: :reviews
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:content, :rating, :user_id, :movie_id)
    end
end
