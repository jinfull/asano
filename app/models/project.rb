class Project < ApplicationRecord
    validates :owner_id, :team_id, :name, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :tasks,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Task
end
