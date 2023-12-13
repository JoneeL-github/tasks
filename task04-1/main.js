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
  getFlower() {
    return ` properties: getFlower method ${this.type}`;
  }
}
const flower1 = new Flower('Rose', 'Red', 5, 'yes');
const flower2 = new Flower('Rose', 'Yellow', 4, 'no');

// Log specific properties of each flower
console.log(flower1.type, flower1.amount);
console.log(flower2.type, flower2.amount);

// console.log(flower1);
// Log specific properties of each flower using the getFlower method
console.log(flower1.getFlower());
console.log(flower2.getFlower());

if (flower1.inStore === 'yes') {
  console.log('Original situation.. ');
  console.log(flower1);
  console.log('yes');
} else {
  console.log('error');
}

if (flower2.amount == 4) {
  console.log('After changes.. ');
  console.log(flower2);
  console.log('no');
} else {
  console.log('error');
}

//a constructor function is nothing but a function that creates objects ??
