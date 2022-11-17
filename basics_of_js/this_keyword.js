/** The this keyword

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

*/

class Animal{
  constructor(name){
    this.name = name;
  }

  petName(){
    return this.name
  }
}

let Dog = new Animal("Tommy")
Dog.petName();
