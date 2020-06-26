class CreateTasklists < ActiveRecord::Migration[6.0]
  def change
    create_table :tasklists do |t|
      t.references :user, foreign_key: true
      t.string :name,null: false

      t.timestamps
    end
  end
end
