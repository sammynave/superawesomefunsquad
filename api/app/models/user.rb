class User < ActiveRecord::Base
  has_one :login
end
