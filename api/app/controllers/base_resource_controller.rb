require 'rails_api_auth/authentication'

class BaseResourceController < JSONAPI::ResourceController
  include RailsApiAuth::Authentication

  before_action :authenticate!
end
