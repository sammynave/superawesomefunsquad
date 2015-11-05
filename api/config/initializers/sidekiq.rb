Sidekiq.configure_server do |config|
  config.redis = { port: 50000 } unless Rails.env == 'development'
end

Sidekiq.configure_client do |config|
  config.redis = { port: 50000 } unless Rails.env == 'development'
end
