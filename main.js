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
