class AddAssigneeToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :assignee, :string
  end
end
