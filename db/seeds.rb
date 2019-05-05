# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(email: 'jinfull2@gmail.com', first_name: 'Jinfull', last_name: 'Jeng', password: 'jinfull', team_id: 1)

Project.create!(owner_id: 1, team_id: 1, name: 'Double Revenue in EMEA Region', completed: true)
Project.create!(owner_id: 1, team_id: 1, name: 'Complete CI Automation', completed: true)