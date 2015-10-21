class SignupsController < BaseResourceController

  skip_before_action :authenticate!, only: ['create']

  def create
    user = User.new(user_params)
    if user.save && user.create_login(login_params)
      render json: user_resource(user), status: :created
    else
      render json: errors(user), status: :unprocessable_entity
    end
  end

  private

  def errors(user)
    user_resource(user)
  end

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
