class AddLoginRefToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :login, index: true, foreign_key: true
  end
end
