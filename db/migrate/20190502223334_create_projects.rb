class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :owner_id, null: false
      t.integer :team_id, null: false
      t.string :name, null: false
      t.boolean :completed, null: false
      t.text :description
      t.date :due_date
      t.timestamps
    end
    
    add_index :projects, :owner_id
    add_index :projects, :team_id
  end
end
