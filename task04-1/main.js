//l

// Task4 -1
// Create Class with methods
// Class Flower: Properties:
//  Type (like Rose), Color, Amount ( how many), inStore ( false/true)
// Methods:
// change Amount, change color, change is inStore false/True
// Change color, amount, instore
// OUTPUT: Original situation:
// Flower { Type: 'Rose', Color: 'Red', Amount: 5, inStore: Yes }
//       After changes:
// Flower { Type: Rose , Color: Yellow , Amount: 4 , inStore: No }

//what are class properties??
//constructors re usable method of objects

class Flower {
  constructor(type, color, amount, inStore) {
    (this.type = type),
      (this.color = color),
      (this.amount = amount),
      (this.inStore = inStore);
  }
}
//change flower1 to see somthing.
const flower1 = new Flower('Rose', 'Red', 5, 'yes');
const flower2 = new Flower('Rose', 'Yellow', 4, 'no');
const result = new Flower(
  flower2.type,
  flower2.color,
  flower2.amount,
  flower2.inStore
);

if (flower1) {
  console.log('Original situation..');
  console.log(flower1);
}

//condition on the type and color properties
if (flower1.type !== 'Rose' || flower1.color !== 'Red') {
  console.log('after changes..');
  console.log(result);
} else {
  console.log('..');
}
//condition on the amount class property
if (flower1.amount < 5 || flower1.amount > 5) {
  console.log('after changes..');
  console.log(result);
} else {
  console.log('..');
}
//condition boolean true false
if (flower1.inStore === 'no') {
  console.log('after changes..');
  console.log(result);
} else {
  console.log('yea its working');
}

// conditon ? '' : ''; //ternary operator but un-readable
