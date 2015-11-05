class User < ActiveRecord::Base
  has_one :login
  has_many :posts
  has_many :comments
end
