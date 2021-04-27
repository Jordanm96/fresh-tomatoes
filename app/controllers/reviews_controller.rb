class ReviewsController < ApplicationController
  before_action :authorize_request, only: [:create, :destroy]
  before_action :set_review, only: :destroy


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
