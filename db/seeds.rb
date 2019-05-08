# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
# Team.destroy_all


user1 = User.create!(email: 'jinfull2@gmail.com', first_name: 'Jinfull', last_name: 'Jeng', password: 'jinfull', team_id: 1)

project1 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Double Revenue in EMEA Region', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true)
project2 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Complete CI Automation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true)
project3 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Develop Marketing Best Practices', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true)
project4 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Improve Session Errors Styling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true)
project5 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Marketing refresh of Splash Page', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', completed: true)

task1 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'EMEA Region Revenue Surveys', completed: true, description: 'This is my description for this and this')