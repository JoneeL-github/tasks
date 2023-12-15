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
    this.type = type;
    this.color = color;
    this.amount = amount;
    this.inStore = inStore;
  }
}

const flower1 = new Flower('Rose', 'Red', 5, true);

// Output the properties of flower1
console.log(flower1.type);
console.log(flower1.color);
console.log(flower1.amount);
console.log(flower1.inStore);

// Check if flower1 exists
if (flower1) {
  console.log('Original situation..');
  flower1.inStore = 'yes';
  console.log(flower1);
} else {
  console.log('no');
}
//  class function to display multiple times?