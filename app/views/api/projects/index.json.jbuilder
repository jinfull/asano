@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :owner_id, :team_id, :name, :completed, :description, :due_date
  end
end