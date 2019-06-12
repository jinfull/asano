Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :index, :show, :update, :destroy] do
      resources :tasks, only: [:create, :index, :show]
    end
    resources :tasks, only: [:show, :destroy]
  end

  root "static_pages#root"
end
