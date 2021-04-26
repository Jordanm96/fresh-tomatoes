# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Movie.destroy_all
User.destroy_all


@user = User.create!(username: 'Jordan', email: 'jmontero@gmail.com', password: '123456')
@user_two = User.create!(username: 'Blake', email: 'blake@gmail.com', password: '123456')

puts "#{User.count} users created."

@mortal_kombat = Movie.create!(title: 'Mortal Kombat', director: 'Simon McQuoid', info: 'MMA fighter Cole Young seeks out Earths greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.', image_url: 'https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@avatar = Movie.create!(title: 'Avatar', director: 'James Cameron', info: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', image_url: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg', user: @user)
@the_warriors = Movie.create!(title: 'The Warriors', director: 'Walter Hill', info: 'In the near future, a charismatic leader summons the street gangs of New York City in a bid to take it over. When he is killed, The Warriors are falsely blamed and now must fight their way home while every other gang is hunting them down.', image_url: 'https://images-na.ssl-images-amazon.com/images/I/81RCVYOMz3L._AC_SL1500_.jpg', user: @user)
@game_over_man = Movie.create!(title: 'Game Over, Man!', director: 'Kyle Newacheck', info: 'Three friends are on the verge of getting their video game financed when their benefactor is taken hostage by terrorists.', image_url: 'https://m.media-amazon.com/images/M/MV5BMTUxNjI4MDU2OF5BMl5BanBnXkFtZTgwMDAzMzA1NDM@._V1_.jpg', user: @user)
@pulp_fiction = Movie.create!(title: 'Pulp Fiction', director: 'Quentin Tarantino', info: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', image_url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg', user: @user)

puts "#{Movie.count} movies created."

@one = Review.create!(content: 'Meh.', rating: 2, user: @user, movie: @mortal_kombat)
@two = Review.create!(content: 'Awesome movie!', rating: 5, user: @user_two, movie: @avatar)
@three = Review.create!(content: 'Great story and an awesome ending for the warriors!', rating: 4, user: @user, movie: @the_warriors)
# @four = Review.create!(content: 'Funny, but pretty stupid.', rating: 3, user: @user, movie: @game_over_man)
@five = Review.create!(content: 'Best Tarantino movie hands down.', rating: 5, user: @user, movie: @pulp_fiction)

puts "#{Review.count} reviews created."

