class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.references :tasklist, foreign_key: true
      t.integer :user_id,null: false
      t.string :name,null: false
      t.text :description

      t.timestamps
    end
  end
end
