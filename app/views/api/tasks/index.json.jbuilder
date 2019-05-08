@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :creator_id, :assignee_id, :project_id, :name, :completed, :description, :due_date
  end
end