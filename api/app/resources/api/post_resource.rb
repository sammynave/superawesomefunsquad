module Api
  class PostResource < JSONAPI::Resource
    attributes :body, :updated_at
    has_one :user
    has_many :comments
  end
end
