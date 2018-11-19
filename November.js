var house = {
areas: [{
livingRoom: {
items: ['tv','sofa']
},
bedroomOne: {
items: ['bed','washing machine'],
windows: 3
},
bedroomTwo:{
items: ['bed','bed','desk'],
windows: 4
},
kitchen:{
items: ['fridge','broken chair']
}
}],
garden: [true, 'Red Rose'],
garage: {
car: {
color: 'red',
wheels: 4,
honk: ()=>{alert("Beep")}
}
}
}



// Find total number of areas in the house

console.log('Total number of areas in the house:', Object.keys(house.areas[0]).length)


// // Add a dining table to the living room

house.areas[0].livingRoom.items.push('dining table')
console.log('Items in the livingRoom:', house.areas[0].livingRoom.items)


// // Add a stove to the kitchen

house.areas[0].kitchen.items.push('stove')
console.log('Items in the kitchen:', house.areas[0].kitchen.items)


// Remove the washing machine from bedroomOne

house.areas[0].bedroomOne.items.pop('washing machine')
console.log('Items in the bedroomOne:', house.areas[0].bedroomOne.items)


// // Find the total number of beds in all rooms

let bedcount = 0;
Object.keys(house.areas[0]).forEach((key) => {
    house.areas[0][key]['items'].forEach((item) => {
        if (item === 'bed') bedcount ++;
    });
});
console.log('Total number of beds in the house is:', bedcount)


// Change the color of the car to blue

house.garage.car.color = 'blue'
console.log('The color of the new car is:', house.garage.car.color)


// Add a another car to the garage with a honk function

house.garage.newcar = {
    color: 'white',
    wheels: 4,
    honk: ()=> {alert("Beep")}
};
console.log('Features of the new car:', house.garage.newcar)

// Make the new car honk

house.garage.newcar.honk();

// Change the 'broken chair' in the kitchen to 'new chair'

house.areas[0].kitchen.items[1] = 'new chair'
console.log('Items in the kitchen:', house.areas[0].kitchen)

// If the house has a garden, console.log the name of the flower

if (house.garden[0]){
    console.log("The name of the flower is:", house.garden[1]
    )};

