## Classes

 Classes are a template for creating objects. They encapsulate data with code to work on that data.

# Creating class

class Animal{
  constructor(species, number_of_legs, food, sound){
    this.species = species
    this.number_of_legs = number_of_legs
    this.food = food
    this.sound = sound
  }

  speak(){
    console.log("I " + this.sound)
  }

}

let Dog = new Animal("dog", 4, "bones", 'bark')
Dog.species
Dog.number_of_legs
Dog.speak()
