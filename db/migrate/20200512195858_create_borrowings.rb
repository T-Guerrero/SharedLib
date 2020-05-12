class CreateBorrowings < ActiveRecord::Migration[6.0]
  def change
    create_table :borrowings do |t|
      t.date :time
      t.string :book
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
