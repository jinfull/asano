class Project < ApplicationRecord
    validates :owner_id, :team_id, :name, :completed, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    # belongs_to :team,
    #     primary_key: :id,
    #     foreign_key: :team_id,
    #     class_name: :Team
end
