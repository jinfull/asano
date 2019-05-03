class Project < ApplicationRecord
    validates :owner_id, :team_id, :name, :completed, presence: true 
end
