

const people = [
    {name : 'meena', age : 20}, 
    {name : 'reena', age : 15}, 
    {name : 'sucona', age : 22}, 
];

const peopleArray = people.map( girl => girl.age );
console.log( peopleArray);

const peopleAge = peopleArray.reduce( (accum, currenValue) => accum + currenValue ,0 );
console.log(peopleAge);