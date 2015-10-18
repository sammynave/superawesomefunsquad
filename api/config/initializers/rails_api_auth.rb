RailsApiAuth.tap do |raa|
  raa.user_model_relation = :user

  raa.facebook_app_id = ENV['FACEBOOK_APP_ID']
  raa.facebook_app_secret = ENV['FACEBOOK_APP_SECRET']
  raa.facebook_redirect_uri = 'http://localhost:4200/'

  raa.google_client_id = ENV['GOOGLE_CLIENT_ID']
  raa.google_client_secret = ENV['GOOGLE_CLIENT_SECRET']
  raa.google_redirect_uri = 'http://localhost:4200/'
end
