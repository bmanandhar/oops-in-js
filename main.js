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
