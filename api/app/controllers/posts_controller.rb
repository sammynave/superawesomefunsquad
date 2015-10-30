class PostsController < BaseResourceController
  def index
    render json: serialize(Post.all)
  end

  def create
    new_post = post_params.merge(user_id: current_login.user_id)
    post = Post.create(new_post)

    post.save
    render json: serializer.serialize_to_hash(PostResource.new(post, nil))
  end

  private

  def post_params
    params.require(:data).require(:attributes).permit(:title, :body)
  end

  def serializer
    JSONAPI::ResourceSerializer.new(PostResource)
  end

  def serialize(posts)
    posts_array = posts.map { |post| PostResource.new(post, nil) }
    serializer.serialize_to_hash(posts_array)
  end
end
