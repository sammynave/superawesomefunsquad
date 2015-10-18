class PostsController < BaseResourceController
  def index
    render json: serialize(Post.all)
  end

  private

  def serialize(posts)
    serializer = JSONAPI::ResourceSerializer.new(PostResource)
    posts_array = posts.map { |post| PostResource.new(post, nil) }
    serializer.serialize_to_hash(posts_array)
  end
end
