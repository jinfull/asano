class Api::ProjectsController < ApplicationController
    # def create

    # end
    
    def index
        @projects = Project.all
    end

    def show
        @project = Project.find(params[:id])
    end
end
