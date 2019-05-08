class Api::TasksController < ApplicationController
    def create
        @task = Task.create!(task_params)
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
        params.require(:task).permit(:name, :creator_id, :assignee_id, :project_id, :name, :completed, :description, :due_date)
    end
end
