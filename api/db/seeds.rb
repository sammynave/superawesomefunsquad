# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([{username: 'test1'},{username: 'test2'}]);
posts = Post.create([{title: 'hang times?', body: 'come over to my place friday.', user: users.first}, {title: 'tennis', body: 'at tennish near harvest', user: users.last}])
comments = Comment.create([{body: 'comments hereeee check me out', post_id: posts.first.id, user_id: users.last.id}, {body: 'i can play tennishsist', post_id: posts.last.id, user_id: users.first.id}])
