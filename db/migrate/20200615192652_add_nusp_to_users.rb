class AddNuspToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :nusp, :string, unique: true
  end
end
