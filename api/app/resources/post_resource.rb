class PostResource < JSONAPI::Resource
  attributes :title, :body, :updated_at
  has_one :user
end
