
// task 1

// for loop 
const oddNumber = [1,3,5,7,9];
const makeEvenNumer = [];

for (const num of oddNumber) {
    let num2 = num + 1;
    makeEvenNumer.push(num2)
}
console.log(makeEvenNumer);

// map 
const makeEvenMap = oddNumber.map( num => num + 1) ;
console.log(makeEvenMap);

// task 2 

const arrayFilter = [ 33, 50, 79, 78, 90, 101, 30 ];

const newArrayFilter = [ ];

for (const num of arrayFilter) {
    if(num % 10 === 0){
        newArrayFilter.push(num);
    }
}
console.log(newArrayFilter);

// filter 

const mekeNewFilter = arrayFilter.filter( num => num % 10 !== 0 );
console.log(mekeNewFilter);