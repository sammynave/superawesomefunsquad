class UserResource < JSONAPI::Resource
  attributes :username
  has_many :posts
end
