class User < ActiveRecord::Base
  has_one :login
  has_many :posts
end
