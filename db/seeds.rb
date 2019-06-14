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
user2 = User.create!(email: 'ajseemar@gmail.com', first_name: 'AJ', last_name: 'Seemar', password: 'seemar', team_id: 1)
user3 = User.create!(email: 'ghalas@gmail.com', first_name: 'George', last_name: 'Halas', password: 'george', team_id: 1)

project1 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Double Revenue in EMEA Region', description: 'Europe, Middle East, Asia are 2019 Q3 priorities.', completed: true)
project2 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Complete CI Automation', description: 'Continuous Integration automation project.', completed: true)
project3 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Develop Marketing Best Practices', description: 'Forumlate standardized best practices document/guidelines.', completed: true)
project4 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Improve Session Errors Styling', description: 'Session errors need to be improved throughout our platform.', completed: true)
project5 = Project.create!(owner_id: user1.id, team_id: 1, name: 'Marketing refresh of Splash Page', description: 'Launch campaign to refresh the outdated look of our splash page.', completed: true)

task1 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'Distribute EMEA Revenue Surveys', completed: false, description: 'Distribution of revenue surveys to be completed before 9/15/2019.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,9))
task2 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'Regional Partner Outreach', completed: false, description: 'Conduct regional partner outreach to regional partners in this region.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2029,2,11))
task3 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'This is a task for this project', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,30))
task4 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'This is another task for this project', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,20))
task5 = Task.create!(creator_id: user1.id, project_id: project1.id, name: 'This is yet another task for this project', completed: false, description: 'Lorem Ipsum is my last name.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,11,7))

task6 = Task.create!(creator_id: user1.id, project_id: project3.id, name: 'Reach Out For Marketing 1:1s', completed: false, description: 'Conduct 1:1s with all marketing leads to gain a better understanding of the current state of affairs.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task7 = Task.create!(creator_id: user1.id, project_id: project3.id, name: 'Do X before Y', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2020,7,15))
task8 = Task.create!(creator_id: user1.id, project_id: project3.id, name: 'Do Y before Z', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))

task9 = Task.create!(creator_id: user1.id, project_id: project4.id, name: 'Task Name Goes Here', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task10 = Task.create!(creator_id: user1.id, project_id: project4.id, name: 'Improve Session Error Cosmetic Styling', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task11 = Task.create!(creator_id: user1.id, project_id: project4.id, name: 'Implement SCSS Preprocessor for improved styling options', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task12 = Task.create!(creator_id: user1.id, project_id: project4.id, name: 'Do A before B', completed: false, description: 'Lorem Ipsum and so forth.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))

task13 = Task.create!(creator_id: user1.id, project_id: project5.id, name: 'Reach Out For Marketing 1:1s', completed: false, description: 'Conduct 1:1s with all marketing leads to gain a better understanding of the current state of affairs.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task14 = Task.create!(creator_id: user1.id, project_id: project5.id, name: 'Do X before Y', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,2,12))
task15 = Task.create!(creator_id: user1.id, project_id: project5.id, name: 'Do Y before Z', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))

task16 = Task.create!(creator_id: user1.id, project_id: project2.id, name: 'Continuous Integration Automation', completed: false, description: 'Circle CI or some other tools must be used to implement lorem ipsum continuous integration with a side dish of lorem ipsum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2019,9,19))
task17 = Task.create!(creator_id: user1.id, project_id: project2.id, name: 'Do A before B', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2020,9,19))
task18 = Task.create!(creator_id: user1.id, project_id: project2.id, name: 'Do B before C', completed: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', assignee: 'Jinfull Jeng', due_date: DateTime.new(2020,3,1))
