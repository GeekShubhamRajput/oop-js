## Class extends | Inheritance

The 'extends' keyword is used in class declarations or class expressions 
to create a class that is a child of another class.


class Animal{
  constructor(name, sound){
    this.name = name
    this.sound = sound
  }
}

class Dog extends Animal{
  constructor(name, sound){
    super(name, sound)
  }
}


class Cat extends Animal{
  constructor(name, sound){
    super(name, sound)
  }

  intro(){
    console.log("I am " + this.name)
    console.log("I sound " + this.sound)  
  }
}

let dog = new Dog("tommy", "bark")
dog.name
dog.sound


let cat = new Cat("Jimmy", "meow")
cat.name
cat.sound 
cat.intro()
