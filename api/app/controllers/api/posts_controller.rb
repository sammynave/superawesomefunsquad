module Api
  class PostsController < BaseResourceController
    before_action :ensure_current_user, only: [:create, :update]
  end
end
