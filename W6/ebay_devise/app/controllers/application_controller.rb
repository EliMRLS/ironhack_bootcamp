class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  before_action :authenticate_user!, only: [:home]

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :name
    end

    def authenticate_user!
    unless user_signed_in?
      #render json: { error: "user not found"}, status: 400
      redirect_to '/users/sign_in'
      return
    end 
  end
    
end
