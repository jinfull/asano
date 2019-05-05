class ChangeProjects < ActiveRecord::Migration[5.2]
  def change
    change_column_null :projects, :completed, true
  end
end
