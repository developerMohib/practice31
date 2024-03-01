

// object of array filter

const instuctor =[ 
    { name : 'Nodi', age : 28 , position : 'senior'},
    { name : 'akhi', age : 27 , position : 'junior'},
    { name : 'akhi', age : 27 , position : 'senior'},
]


for (const list of instuctor) {
    if(list.position === 'senior'){
        console.log(list.position);
    }
}

const instuctorMap = instuctor.map(identity => identity);
console.log(instuctorMap);
const instuctorFilter = instuctorMap.filter( list => list.position === 'senior');
console.log(instuctorFilter);
instuctorFilter.forEach(name => console.log(name.name , 'is senior from Array'))

