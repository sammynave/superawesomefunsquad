module Api
  class SignupsController < BaseResourceController

    skip_before_action :authenticate!, only: ['create']
    before_action :authorize_signup, only: ['create']

    def create
      user = User.new(user_params.merge(email: login_params['identification']))

      if user.save && user.create_login(login_params)
        render json: user_resource(user), status: :created
      else
        render json: { errors: [user.errors] }, status: :unprocessable_entity
      end
    end

    private

    def authorize_signup
      return unauthorized unless BetaUser.exists?(email: login_params['identification'])
    end

    def unauthorized
      render json: { errors: [forbidden_messages.sample] }, status: :forbidden
    end

    def forbidden_messages
      [
        {'Hey,' => 'a lot of people\'s girlfriends are in there...'},
        {'Sorry' => 'little guy, not on the list.'},
        {'You' => 'need to be on the list. You gotta find that person with the list!'}
      ]
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
end
