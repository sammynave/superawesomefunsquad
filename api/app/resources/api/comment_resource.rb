module Api
  class CommentResource < JSONAPI::Resource
    attributes :body, :updated_at
    has_one :user
    has_one :post
  end
end
