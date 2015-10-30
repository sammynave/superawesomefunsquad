class PostResource < JSONAPI::Resource
  attributes :title, :body
  has_one :user
end
