/*
// "http://www.allthingsjavascript.com/"
//JavaScript Prototypal Inheritance - Jonas Schmedtmann
//https://www.youtube.com/watch?v=3AKh0-PDsMw
var person = {
  firstName: "Bill",
  lastName: "Gates",
  country: "USA",
  personId: function(){
    console.log(`${this.firstName} ${this.lastName} "-- function inside object".`)
  }
};
person.personId();
console.log(`${person.firstName} ${person.lastName} is from ${person.country}.`)

var superman = {
  firstName: "Clark",
  lastName: "Kent",
  superheroName: "Superman",
  revealIdentity: function(){
    return `${this.firstName} ${this.lastName} is ${this.superheroName}.`
  }
};
console.log(superman.revealIdentity());

var batman = {
  firstName: "Bruce",
  lastName: "Wyne",
  superheroName: "Batman",
  revealIdentity: function(){
    return `${this.firstName} ${this.lastName} is ${this.superheroName}.`
  }
};
console.log(batman.revealIdentity());

//Replace values
superman.firstName = 'Duper';
superman.lastName =  'Man';
console.log(`${superman.revealIdentity()} -- values in superman object are replaced.`);

//Constructor Object

var scientist = new Object();
scientist.firstName = 'Albert';
scientist.lastName = 'Einstein';
scientist.discovery = 'Theory of Relativity';
scientist.detail = function(){
  return `${this.firstName} ${this.lastName} discovered ${this.discovery}.`
};
console.log(scientist.detail());

//user-object exmaple

var user = {
  name: "Johny",
  calorieTarget: 350,
  meals: ["Indian", "Chinese", "Italian"]
};

//now meals will be corrected plus more property-value declared:
user.meals = ["breakfast", "lunch", "dinner"];
user.mealTaken = "";
user.description = "calorie calculation";
user.bornOn = "06-10-1996";
user.caloriesEaten = 200;
user.toEat = function(){
  for (var i = 0; i < this.meals.length; i ++){
    this.mealTaken = this.meals[i]
    console.log(`${this.mealTaken}. Message to ${this.name}: needs to eat ${this.calorieTarget} calories. He ate ${this.caloriesEaten} calories, He was born ${this.bornOn}`)
  }
};

user.toEat();
////
var Superhero = function () {
  console.log('Superhero instance created');
};

// Superhero();

var clark = new Superhero();
//=> "Superhero instance created"

var bruce = new Superhero();
//=> "Superhero instance created"


var Superhero = function (firstName, lastName, superheroName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.superheroName = superheroName;
  this.revealIdentity = function () {
    console.log(this.firstName + " " + this.lastName + " is " + this.superheroName);
  }
};

var superman = new Superhero("Clark", "Kent", "Superman");
var batman = new Superhero("Bruce", "Wayne", "Batman");

console.log(`${superman.superheroName} ${superman.lastName}`); //=> "Superman Kent"

console.log(superman.superheroName); //=> "Superman";
superman.revealIdentity();// => "Clark Kent is Superman";
batman.revealIdentity();// => "Bruce Wayne is Batman";
//
function Pet (name, species, breed, noise)  {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise =  noise;
  this.makeNoise = function () {
    console.log(`${this.name} is a ${this.species} of ${this.breed} breed and it ${this.noise}.`);
  }
}

var wolfman = new Pet('Wolfman', 'cat', 'Tuxedo Cat', 'meow');
var rover = new Pet('Rover', 'dog', 'Golden Retriever', 'bark');
rover.makeNoise();
wolfman.makeNoise();
// forEach loop:

var myArray = ["Patricia", "Albert", "Marlon", "Brandon", "Rachele"];
myArray.forEach(value=> {console.log(value)});

const arr = ['cat', 'dog', 'fish'];
arr.forEach(element => {
  console.log(element);
});
// cat
// dog
// fish

const myObj = {  a: 1, b: 2, c: "String",  d: 4  }
for (let myProp in myObj) {  
  console.log(myObj[myProp])
};
// 1
// 2
// "String"
// 4
function Flower (color, petals, smells) {
  this.color = color;
  this.petals = petals;
  this.smells = smells;
  // Demonstrates a simple method in an object
  this.bloom = function() {
      console.log("Look at me!");
  };
};

var lily = new Flower("yellow", 6, true);
var rose = new Flower("red", 32, true);

console.log(lily.bloom);

console.log(rose.bloom);

console.log(lily.bloom === rose.bloom);
//=> false

//console.log(lily.bloom() === rose.bloom());
//=> true

//Prototype

var objProto = {
  greet: function(){
    console.log(this.greeting + "World!");
  }
};
//now here is a constructor function:
var Greeting = function(term){
  this.greeting = term;
};

Greeting.prototype = objProto;
var obj1 = new Greeting("Hello, ");
obj1.greet(); //=> Hello, World!

//Method-2
var obj2 = Object.create(objProto);
obj2.greeting = "Bye, ";

var obj3 = {
  greeting: "Hi, "
};

Object.setPrototypeOf(obj3, objProto);
obj3.greet(); //=> Hi, World!

//Hoisting
hoisting(); // calling a function before it's even defined
function hoisting(){
  console.log(hoist);

  var what = "Variable and function decarations";
  console.log("What is hoisted? " + what);
  var hoist = "to lift or raise up.";
  console.log("Hoist means " + hoist);
};
//
function Flower (color, petals, smells) {
  this.color = color;
  this.petals = petals;
  this.smells = smells;
};
//prototype declared:
Flower.prototype = {
bloom: function() {
  console.log("Look at me!");
  }
};

var lily = new Flower("yellow", 6, true);
var rose = new Flower("red", 32, true);

//Now check the following:
lily.bloom === rose.bloom; //=> true, being prototype 
//

function Flower (color, petals, smells) {
  this.color = color;
  this.petals = petals;
  this.smells = smells;
};
//prototype declared:
Flower.prototype = {
bloom: function() {
  console.log("Look at me!");
  },
  smellsGood: function() {
    // use 'this' to access the instance's attributes
      if (this.smells) {
        return 'This flower smells amazing!';
      } else {
        return 'What a noxious weed!';
      }
    },
    describe: function() {
      console.log("This flower is " + this.color + ".");    
    }
};

var rose = new Flower("red", 32, true);

Flower(rose);

//JavaScript Prototypal Inheritance - Jonas Schmedtmann
//https://www.youtube.com/watch?v=3AKh0-PDsMw
//Prototype:

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};
// here is a function-constructor:
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
  }
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};
//say, all of the person objects has the same lastname

Person.prototype.lastName ='Smith';
//now john object can be written as:
var john = new Person('John', 1990, 'teacher');

var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
mark.calculateAge();

console.log(john.lastName);//=> Smith
console.log(mark.lastName);//=> Smith
*/
//Object.create();

var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';
//or following way
jane = Object.create(personProto, 
 { 
   name: { value: 'Jane' },
   yearOfBirth: { value: 1969 },
   job: { value: 'designer' }
});

john.calculateAge();
jane.calculateAge();
//Class:
class flower {
  constructor (color, petals, smells) {
    this.color = color;
    this.petals = petals;
    this.smells = smells;
  }

  getColor() {
    console.log(this.color);
  }
};

//extending a class
class Animal {
  constructor(name, type="unknown") {    // default value
    this.name = name;
    this.type = type;
  }
  getName() {
    console.log(this.name);
  }
  speak() {
    console.log(`${this.name} makes some noise`);
  }
};

class Cat extends Animal {
  constructor(name, isDomestic) {
    super(name, 'carnivore');
    this.isDomestic = isDomestic;
  }
  canBeDomesticated() {
    console.log(this.isDomestic);
  }
  speak() {
    super.speak();
    console.log(`${this.name} meows`)
  }
};


















