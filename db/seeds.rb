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

@mortal_kombat = Movie.create!(title: 'Mortal Kombat', director: 'Simon McQuoid', info: 'MMA fighter Cole Young seeks out Earths greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.', image_url: 'https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user_two)
@avatar = Movie.create!(title: 'Avatar', director: 'James Cameron', info: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', image_url: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg', user: @user)
@the_warriors = Movie.create!(title: 'The Warriors', director: 'Walter Hill', info: 'In the near future, a charismatic leader summons the street gangs of New York City in a bid to take it over. When he is killed, The Warriors are falsely blamed and now must fight their way home while every other gang is hunting them down.', image_url: 'https://images-na.ssl-images-amazon.com/images/I/81RCVYOMz3L._AC_SL1500_.jpg', user: @user)
@game_over_man = Movie.create!(title: 'Game Over, Man!', director: 'Kyle Newacheck', info: 'Three friends are on the verge of getting their video game financed when their benefactor is taken hostage by terrorists.', image_url: 'https://m.media-amazon.com/images/M/MV5BMTUxNjI4MDU2OF5BMl5BanBnXkFtZTgwMDAzMzA1NDM@._V1_.jpg', user: @user)
@pulp_fiction = Movie.create!(title: 'Pulp Fiction', director: 'Quentin Tarantino', info: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', image_url: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg', user: @user_two)
@lotr = Movie.create!(title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', info: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', image_url: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@fight_club = Movie.create!(title: 'Fight Club', director: 'David Fincher', info: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', image_url: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@inception = Movie.create!(title: 'Inception', director: 'Christopher Nolan', info: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', image_url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@civil_war = Movie.create!(title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', info: 'Political involvement in the Avengers affairs causes a rift between Captain America and Iron Man.', image_url: 'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@dark_knight = Movie.create!(title: 'The Dark Knight', director: 'Christopher Nolan', info: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', image_url: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@star_wars = Movie.create!(title: 'Star Wars: Episode VI - Return of the Jedi', director: 'Richard Marquand', info: 'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperors trap.', image_url: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@pirates = Movie.create!(title: 'Pirates of the Caribbean: The Curse of the Black Pearl', director: 'Gore Verbinski', info: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governors daughter, from Jacks former pirate allies, who are now undead.', image_url: 'https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@goodfellas = Movie.create!(title: 'Goodfellas', director: 'Martin Scorsese', info: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.', image_url: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', user: @user)
@private_ryan = Movie.create!(title: 'Saving Private Ryan', director: 'Steven Spielberg', info: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', image_url: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR0,0,182,268_AL_.jpg', user: @user)

puts "#{Movie.count} movies created."

@one = Review.create!(content: 'Meh. Wanted more fatalities.', rating: 2, user: @user, movie: @mortal_kombat)
@two = Review.create!(content: 'Awesome movie!', rating: 5, user: @user_two, movie: @avatar)
@three = Review.create!(content: 'Great story and an awesome ending for the warriors!', rating: 4, user: @user, movie: @the_warriors)
# @four = Review.create!(content: 'Funny, but pretty stupid.', rating: 3, user: @user, movie: @game_over_man)
@five = Review.create!(content: 'Best Tarantino movie hands down.', rating: 5, user: @user, movie: @pulp_fiction)
Review.create!(content: 'Star Wars is the best!', rating: 5 , user: @user_two, movie: @star_wars )
Review.create!(content: 'This is the best Batman movie!', rating: 4, user: @user, movie: @dark_knight )
Review.create!(content: 'Not the biggest Marvel fan, still solid film.', rating: 4, user: @user, movie: @civil_war )
Review.create!(content: 'Starts off pretty slow, I like the sequels more.', rating: 3, user: @user_two, movie: @lotr )
Review.create!(content: 'Woah.', rating: 5, user: @user, movie: @fight_club )
Review.create!(content: 'Leo is the GOAT!', rating: 4, user: @user_two, movie: @inception )
Review.create!(content: 'Johnny Depp is hilarious.', rating: 4, user: @user, movie: @pirates )
Review.create!(content: 'One of my favorite Robert DeNiro movies for sure.', rating: 5, user: @user_two, movie: @goodfellas )
Review.create!(content: 'A little old, but still a classic Hanks film.', rating: 4, user: @user, movie: @private_ryan )

puts "#{Review.count} reviews created."

