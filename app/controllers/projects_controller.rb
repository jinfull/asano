class Api::ProjectsController < ApplicationController    
    def create
        @project = Project.create!(project_params)
        render :show
    end

    def index
        @projects = Project.all
    end

    def show
        @project = Project.find(params[:id])
    end

    def update
        @project = Project.find(params[:id])

        if @project.update(project_params)
            render :show
        else 
            render json: @project.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @project = Project.find(params[:id])
        project_id = @project.id

        if @project.destroy
            render json: project_id
        else
            render json: @project.errors.full_messages, status: 422
        end
    end


    private

    def project_params
        params.require(:project).permit(:name, :description, :team_id, :owner_id)
    end
end
