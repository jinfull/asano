class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :team_id, true
    remove_index :users, :username
    remove_column :users, :username, :string
  end
end
