class AddMaxBorrowingsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :max_borrowings, :integer, :default => 0
  end
end
