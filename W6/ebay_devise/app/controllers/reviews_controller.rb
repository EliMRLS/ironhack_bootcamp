class ReviewsController < ApplicationController
  def create
    @product = Product.find(params[:product_id])
    @review = @product.reviews.new(review_params)
    @user = User.find_by_email(params[:review][:user_id])

    if @review.save
      redirect_to action: 'index'
    else
      render 'create'
    end
  end

  def index
    @product = Product.find(params[:product_id])
    @review = @product.reviews.all
  end

  private

  def review_params
    params.require(:review).permit(:description)
  end

end
