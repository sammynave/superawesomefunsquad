module Api
  class UsersController < BaseResourceController
    def me
      render json: JSONAPI::ResourceSerializer.new(UserResource).serialize_to_hash(UserResource.new(current_user, nil))
    end
  end
end
