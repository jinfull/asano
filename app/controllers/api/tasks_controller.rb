class Api::TasksController < ApplicationController
    def create
        @task = Task.new(task_params)
        @task.creator_id = current_user.id
        @task.project_id = params[:project_id]
        @task.save
        render :show
    end

    # def index
    #     @tasks = Task.all.select { |t| t.project_id == params[:project_id].to_i }
    # end

    def show
        @task = Task.find(params[:id])
    end

    def destroy
        @task = Task.find(params[:id])
        task_id = @task.id

        if @task.destroy
            render json: task_id
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    def update
        @task = Task.find(params[:id])

        if @task.update(task_params)
            render :show
        else 
            render json: @task.errors.full_messages, status: 422
        end 
    end 

    private

    def task_params
        params.require(:task).permit(:name, :assignee, :completed, :description, :due_date)
    end
end
