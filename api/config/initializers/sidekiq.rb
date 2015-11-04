Sidekiq.configure_server do |config|
  config.redis = { port: 50000 }
end

Sidekiq.configure_client do |config|
  config.redis = { port: 50000 }
end
