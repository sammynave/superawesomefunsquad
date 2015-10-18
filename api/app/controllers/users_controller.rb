class UsersController < BaseResourceController

  def create
    @user = User.find_or_create_by(user_hash)

    if @user.save
      user_resource = JSONAPI::ResourceSerializer.new(UserResource).serialize_to_hash(UserResource.new(@user, nil))
      render json: user_resource
    else
      head 422 # you'd actually want to return validation errors here
    end
  end

  private

  def user_hash
    user_params.merge({ login_id: current_login.id })
  end

  def user_params
    OpenStruct.new(params["data"]["attributes"]).to_h
  end
end
