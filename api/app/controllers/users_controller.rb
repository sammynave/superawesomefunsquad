require 'rails_api_auth/authentication'

class UsersController < BaseResourceController
  include RailsApiAuth::Authentication

  before_action :authenticate!, except: ['create']

  def create
    user = User.new(user_params)
    binding.pry
    if user.save && user.create_login(login_params)
      render json: user_resource(user), status: :created
    else
      render json: user_resource(user).errors, status: :unprocessable_entity
    end
  end

  private

  def user_resource(user)
    JSONAPI::ResourceSerializer.new(UserResource).serialize_to_hash(UserResource.new(user, nil))
  end

  def user_params
    params.require(:data).require(:attributes).permit(:username)
  end

  def login_params
    params.require(:data).require(:attributes).permit(:identification, :password)
  end
end
