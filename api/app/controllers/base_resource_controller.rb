require 'rails_api_auth/authentication'

class BaseResourceController < JSONAPI::ResourceController
  include RailsApiAuth::Authentication

  before_action :authenticate!#, :username?

  private

  def username?
    current_login.user.has(:username)
  end
end
