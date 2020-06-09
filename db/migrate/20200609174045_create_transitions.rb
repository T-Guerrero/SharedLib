class CreateTransitions < ActiveRecord::Migration[6.0]
  def change
    create_table :transitions do |t|
      t.references :oldUser, null: false
      t.references :newUser, null: false
      t.references :book, null: false, foreign_key: true
      t.datetime :deadline, precision: 6

      t.timestamps
    end
    add_foreign_key :transitions, :users, column: :oldUser_id, primary_key: :id
    add_foreign_key :transitions, :users, column: :newUser_id, primary_key: :id
  end
end
