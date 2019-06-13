json.set! 'project' do
    json.set! @project.id do
        json.extract! @project, :id, :owner_id, :team_id, :name, :completed, :description, :due_date
    end
end

json.set! 'tasks' do
    @project.tasks.each do |task|
        json.set! task.id do
            json.extract! task, :id, :creator_id, :assignee, :project_id, :name, :completed, :description, :due_date
        end
    end
end