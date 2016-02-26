class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id]) ||
    render_404(params)
  end

end
