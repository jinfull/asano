class Api::TasksController < ApplicationController
    def create
        @task = Task.new(task_params)
        @task.creator_id = current_user.id
        @task.project_id = params[:project_id]
        @task.save
        render :show
    end

    def index
        @tasks = Task.all
    end

    def show
        @task = Task.find(params[:id])
    end

    private

    

    def task_params
        params.require(:task).permit(:name, :assignee_id, :name, :completed, :description, :due_date)
    end
end
