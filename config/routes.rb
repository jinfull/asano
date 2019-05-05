Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :index, :edit, :show]
  end

  root "static_pages#root"
end
