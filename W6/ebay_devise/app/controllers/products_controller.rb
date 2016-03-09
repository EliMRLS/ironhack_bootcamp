class ProductsController < ApplicationController

  # before_action :authenticate_user!

  def new
    @user = User.find(params[:user_id])
    @product = Product.new
  end

  def create
    @user = User.find(params[:user_id])
    @product = @user.products.new(product_params)

    if @product.save
      redirect_to action: 'index', controller: 'products'
    else
      render 'new'
    end
  end


  def index
    @products = Product.all
  end



  def edit
    @user = User.find(params[:user_id])
    @product = @user.products.find(params[:id])
  end


  def update
    @user = User.find(params[:user_id])
    @product = @user.products.find(params[:id])

    if @product.update_attributes(product_params)
      redirect_to action: 'index'
    else
      render 'edit'
    end

  end


  def show
    @product = Product.find(params[:id])
    @bid = Bid.new
    @review = Review.new
  end


  private

  # def product
  #   @_product ||= product.find(params[:product_id])
  # end

  def product_params
    params.require(:product).permit(:title, :description, :deadline, :minimum )
  end

  # def authenticate_user!
  #   unless user_signed_in?
  #     #render json: { error: "user not found"}, status: 400
  #     redirect_to '/users/sign_in'
  #     return
  #   end 
  # end


end
