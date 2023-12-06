// Task3

// Create Array “Dog”,”Horse”,”Cow”
// a) PrintOut Array,
// OUTPUT:         Dog
//                 Horse
//                 Cow

// b) Copy Array to new Array  ( use Map )
// Add to new Array new columns “Cat”, “Sheep”
// OUTPUT: New array:  [ 'Dog', 'Horse', 'Cow', 'Cat', 'Sheep' ]

// c) 1) Search “Cow” from new Array.  2) Search "Co".
// OUTPUT:    Search result:  Cow, Founded
//                     Search result:  Co,  Not found

const animalsArray = ['Dog', 'Horse', 'Cow'];

const newArray = animalsArray.map(function (animal) {
  return animal;
});
console.log(newArray);

newArray.push('Cat', 'Sheep');
console.log(newArray);

//where is cow??
const indexOfCow = newArray.indexOf('Cow');
console.log(indexOfCow);

//is cow realy at index 2?
let animal = newArray[2];
if (animal === 'Cow') {
  console.log('Cow Found ');
} else {
  console.log('no');
}

let find = newArray.find((animal) => animal === 'Co');
console.log('Search result: Co, Not Found ' + find);
