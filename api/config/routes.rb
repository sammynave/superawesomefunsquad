Rails.application.routes.draw do
  namespace :api do
    jsonapi_resources :signups, only: [:create]
    jsonapi_resources :posts
    jsonapi_resources :comments
  end

  get '/(*path)' => 'front_end#index', as: :root, format: :html
end
