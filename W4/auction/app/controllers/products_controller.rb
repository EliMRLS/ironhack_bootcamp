class ProductsController < ApplicationController

  def index
    @user = User.find_by(id: params[:user_id])
    @products = @user.products
  end 

  def new
    @user = User.find_by(id: params[:user_id])
    @product = @user.products.new
  end

  def create
    @user = User.find_by(id: params[:user_id])

    @product = @user.products.new(entry_params) 

    if @product.save
      redirect_to user_product_path(@user, @product) 
    else
      render 'new' 
    end
  end

  def show
    @product = Product.find_by(id: params[:id]) ||
    render_404(params)
  end

  def all
    @products = Product.order(created_at: :desc)
  end


private

  def entry_params
    params.require(:product).permit(:title, :description, :deadline)
  end

end
