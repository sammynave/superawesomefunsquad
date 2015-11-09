class BaseResourceController < ApplicationController
  include JSONAPI::ActsAsResourceController

  before_action :authenticate!

  def ensure_current_user
    user_id = params["data"]["relationships"]["user"]["data"]["id"]
    if user_id.to_i != current_user.id
      render json: {error: 'You can only create do this for yourself. Not other users. Ya stinker. :/'}, :status => 403
    end
  end
end
