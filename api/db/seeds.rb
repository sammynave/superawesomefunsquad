# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'yaml'

beta_users = YAML.load_file(File.absolute_path('./db/beta_users.yml'))
BetaUser.create(beta_users)

if Rails.env.development?
  users = User.create([
    {username: 'test1', email: 'test1@poopy.com'},
    {username: 'test2', email: 'test2@frank.com'}
  ]);
  posts = Post.create([
    {body: 'come over to my place friday.', user: users.first},
    {body: 'at tennish near harvest', user: users.last}
  ])
  comments = Comment.create([
    {body: 'comments hereeee check me out', post_id: posts.first.id, user_id: users.last.id},
    {body: 'i can play tennishsist', post_id: posts.last.id, user_id: users.first.id}
  ])
end
