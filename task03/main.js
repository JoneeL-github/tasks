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



const animalArray = [{animal: 'Dog'}, {animal: 'Horse'}, {animal: 'Cow'}];

let animal = animalArray.map(function(item) {
    return item.animal;
});

// console.log(animal);


let animalArr2 = ['Dog', 'Horse', 'Cow'];

animalArr2.map(function(animalItem, index, allanimals) {
    if(allanimals.length <= 2) {
        console.log(`wow thats alot of animals`);
    } else {
        console.log(`i dont quite follow this <= ${index} + ${animalItem} + ${allanimals}`);
    }
    
    return `${index}_${animalItem}`;
});

