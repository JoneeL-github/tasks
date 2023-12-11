//Methods:  change Amount, change color, change is inStore false/True
//OUTPUT: Original situation:  Flower { Type: 'Rose', Color: 'Red', Amount: 5, inStore: Yes }
// After changes:  Flower { Type: Rose , Color: Yellow , Amount: 4 , inStore: No }

class Flower {
  constructor(type) {
    this.type = type;
  }

  getFlower() { //this is the method displaying text
    document.getElementById('demo2').innerText =
      'This is the type ' + this.type;
  }
}

let myType = new Flower('Rose');
myType.getFlower(); 
