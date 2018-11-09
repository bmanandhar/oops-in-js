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