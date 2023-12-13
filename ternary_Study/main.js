
//properties type, color, amount, inStore

class Flower {
    constructor(type) {
        this.type = type;
    }

    flowerDescription () {
        return `Hello the flower type is ${this.type}`
    }
}


const flower1 = new Flower('Tulip');
console.log(flower1.flowerDescription()); //this.flowerDescription()
console.log(flower1.type); //Tulip flower1 object references this keyword

const flower2 = new Flower('Rose');
console.log(flower2.flowerDescription());
console.log(flower2.type); //Rose

if(flower1.type === 'Tulip') {
    console.log('yes');
    console.log(flower1.type);
    console.log('replacing flower type... ');
    flower1.type = 'Sunflower'
    console.log('retreving result');
    console.log(flower1.type);
} else {
    console.log('no');
}