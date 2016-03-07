# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

1.upto(10) do |index| 
  s = Sandwich.create(
    name: "Sandwich #{index}",
    bread_type: "Baguette"
    )
end

  1.upto(3) do |index|
    i = Ingredient.create(
      name: "Ingredient #{index}",
      calories: rand(10)
      )
end
