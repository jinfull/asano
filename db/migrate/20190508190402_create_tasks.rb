class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :creator_id, null: false
      t.integer :assignee_id
      t.integer :project_id, null: false
      t.string :name, null: false
      t.boolean :completed, null: false
      t.text :description
      t.date :due_date
      t.timestamps
    end

    add_index :tasks, :creator_id
    add_index :tasks, :assignee_id
    add_index :tasks, :project_id
  end
end
