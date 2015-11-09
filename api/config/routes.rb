Rails.application.routes.draw do
  namespace :api do
    get 'users/me' => 'users#me'

    jsonapi_resources :signups, only: [:create]
    jsonapi_resources :posts
    jsonapi_resources :comments
    jsonapi_resources :users
  end

  get '/(*path)' => 'front_end#index', as: :root, format: :html
end
