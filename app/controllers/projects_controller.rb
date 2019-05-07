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

    private

    def project_params
        params.require(:project).permit(:name, :description, :team_id, :owner_id)
    end
end
