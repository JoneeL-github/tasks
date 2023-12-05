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

// const originArray = ['Dog', 'Horse', 'Cow'];

// Array of objects

const animalsArray = ['Dog', 'Horse', 'Cow'];

const newArray = animalsArray.map(function (animal) {
  return animal;
});
console.log(newArray);

newArray.push('Cat', 'Sheep');
console.log(newArray);
//searching the array for positions
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i] + ' ' + i);
}

if (newArray[2] === 'Cow') {
  console.log('yes');
} else {
  console.log('no');
}

let cow = newArray[2];
if (cow === 'Cow') {
  console.log('result cow Founded ' + cow);
} else {
  console.log('error');
}

if (cow === 'Co') {
  console.log('yes' + cow);
} else {
  console.log('Co, not Found');
}
