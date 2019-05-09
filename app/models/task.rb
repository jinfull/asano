class Task < ApplicationRecord
    validates :creator_id, :project_id, :name, :completed, presence: true
    validates :completed, inclusion: { in: [ true, false ] }

    belongs_to :project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User
end
