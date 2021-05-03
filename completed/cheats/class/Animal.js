class HomeAnimal {

  sayHi() {
    alert(this.name);
  }
}

class Cat extends HomeAnimal {
  color = 'name';
  type = '';

  myrlikat()
  {
    alert('Mya');
  }
  set current(name) {
    this.log.push(name);
  }
}

class Dog extends HomeAnimal {
  color = 'name';
  type = '';

  #height = 0;
  #width;

  static eat() {
    return this;
  }

  // Getter
  get area() {
    return `1111`;
  }

  // Method
  *getSides() {
    for(const side of this.sides){
      yield side;
    }
  }

  layt()
  {
    alert('Mya');
  }
}


