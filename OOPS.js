// 1. Object in JS (Basic)
let car = {
  brand: "Toyota", // property
  color: "Black", // property
  start: function () {
    // method
    console.log("Car started");
  },
};
console.log(car.brand);
car.start();

// 2. Class + Inheritance
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} car started`);
  }
}

// Child class (Inheritance)
class ElectricCar extends Car {
  chargeBattery() {
    console.log(`${this.brand} is charging the battery...`);
  }

  // Polymorphism (same method name, different behavior)
  start() {
    console.log(`${this.brand} electric car started silently ⚡`);
  }
}

let car1 = new Car("Toyota", "Black");
let car2 = new Car("Honda", "Blue");
car1.start(); // Toyota car started
car2.start(); // Honda car started

let tesla = new ElectricCar("Tesla", "Red");
tesla.start(); // Tesla electric car started silently ⚡ (Polymorphism)
tesla.chargeBattery(); // Tesla is charging the battery...
console.log(tesla);

class Cars {
  #fuelLevel = 0; // Private variable

  constructor(brand) {
    this.brand = brand;
  }

  fillFuel(liters) {
    if (liters > 0) {
      this.#fuelLevel += liters;
      console.log(`Added ${liters} liters of fuel`);
    }
  }

  start() {
    if (this.#fuelLevel > 0) {
      console.log(`${this.brand} started`);
    } else {
      console.log("No fuel! Please fill fuel first.");
    }
  }
}

let myCar = new Cars("Toyota");
myCar.start(); // No fuel! Please fill fuel first.
myCar.fillFuel(10); // Added 10 liters of fuel
myCar.start(); // Toyota started
//console.log(myCar.#fuelLevel); // ❌ Error: Private field

// Polymorphism
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal{
    speak(){
         console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak(){
        console.log("Cat meows")
    }
}

let dog = new Dog();
let cat = new Cat();
dog.speak();
cat.speak();


// whole properety working
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Doctor extends Person {
    #salary = 0; // Encapsulation

    constructor(name, specialty) {
        super(name);
        this.specialty = specialty;
    }

    setSalary(amount) { // Abstraction
        if (amount > 0) this.#salary = amount;
    }

    getSalary() {
        return this.#salary;
    }

    introduce() { // Polymorphism
        console.log(`Hi, I am Dr. ${this.name}, a ${this.specialty} specialist.`);
    }
}

let doc = new Doctor("Abhinav", "Cardiologist");
doc.introduce();      // Hi, I am Dr. Abhinav, a Cardiologist specialist.
doc.setSalary(50000);
console.log(doc.getSalary()); // 50000
