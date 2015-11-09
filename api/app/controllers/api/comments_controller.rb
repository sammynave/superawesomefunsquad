module Api
  class CommentsController < BaseResourceController
    before_action :ensure_current_user, only: [:create, :update]
  end
end
