## Objects

# creating objects

let Animal = function(species, sound){
  this.species = species
  this.sound = sound
}

let Dog = new Animal("dog", "bark")

Dog.species
Dog.sound

# another example

let Vehicle = function(vehicle_type, number_of_wheels, engine_type){
  this.vehicle_type = vehicle_type
  this.number_of_wheels = number_of_wheels
  this.engine_type = engine_type
}

let Car = new Vehicle("car", 4, "diesel")
Car.vehicle_type
Car.number_of_wheels
Car.engine_type


let Bike = new Vehicle("bike", 2, "petrol")
Bike.vehicle_type
Bike.number_of_wheels
Bike.engine_type