require 'rails_api_auth/authentication'

class ApplicationController < ActionController::Base
  include RailsApiAuth::Authentication

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def current_user
    @current_user ||= User.find(current_login.user_id)
  end
end
