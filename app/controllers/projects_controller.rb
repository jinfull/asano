class Api::ProjectsController < ApplicationController    
    def create
        # @project = Project.new(project_params)
        # @project.owner_id = current_user.id
        @project = current_user.projects.build(project_params)
        @project.save

        render :show
    end

    def index
        @projects = current_user.projects
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
        params.require(:project).permit(:name, :description, :team_id)
    end
end
