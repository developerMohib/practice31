
// find shopia secondary school location , output : ABC secondary school
const data = {
    shopia : {
        id : 33,
        study : [
            {
                primary : [
                    {schoolName : 'ABC primary school'},
                    { location : 'peters burg'}
                ]
            },
            {
                secondary : [
                    {schoolName : 'ABC secondary school'},
                    { location : 'lorence burg'}
                ]
            },
        ]
    }

};

let directSchoolFind = data.shopia.study[1].secondary[0].schoolName;
console.log( 'direct find :', directSchoolFind);

let shopiaStudy = data.shopia.study;
let shopiaSchool = shopiaStudy[1];
let secondarySchool =shopiaSchool.secondary[0];
let schoolNameFind = secondarySchool.schoolName;
console.log( 'nested find :', schoolNameFind);

// output : peters burg , Herry 

const data2 = {
    2222 : {
        name : 'Jack',
        section : 'C',
        class : 'IX',
        address : {
            'bulding no' : 12,
            'street' : 'st jonson',
            'city' : 'peters burg',
            'country' : 'USA'
        }
    },
    3333 :{
        name : 'Herry',
        section : 'B',
        class : 'XI',
        address : {
            'bulding no' : 13,
            'street' : 'st jonson',
            'city' : 'peters burg',
            'country' : 'USA'
        }
    }
};

const directCityFind = data2['2222'].address.city;
console.log( 'direct city Find :', directCityFind);

const directNameFind = data2['3333'].name;
console.log( 'direct Name Find :', directNameFind);