console.log("test")
// Using the information we've covered today answer the following 3 questions.
// And answer 2 code wars problems for tonight as well. One that you've done previously in python, one that you have not yet done. All must be produced in JavaScript.
// Once the questions are completed, commit them to github and submit the github link to the assignment
// As recommended material, you may also watch the videos listed below on the JavaScript Event loop and Promised Based functions.

//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorite_food(person_list) {
    for (let food in person_list) {
        if (Array.isArray(person_list[food])) {
            console.log(`${food}: ${person_list[food].join(", ")}`);
        } else {
            console.log(`${food}: ${person_list[food]}`);
        }
    }
}

favorite_food(person3);

// Other option 
console.log(person3.pizza)
console.log(person3.tacos)
console.log(person3.burgers)
console.log(person3.ice_cream)
console.log(person3.shakes[0])

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called. Create two people using the 'new' keyword, and print 
both of their infos and increment one persons age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
// Use an arrow to create the printInfo method
    printInfo = () => `My name is ${this.name} and I am ${this.age} years old.`

// Create another arrow function for the addAge method that takes a single parameter
    addAge = (year) => {
        this.age += year;
}
}
// Create two people using the 'new' keyword, and print both of their infos 
let person1 = new Person('Alicia', 30)
let person2 = new Person('Henry', 32)

// Adding to the age 
// increment one persons age by 3 years.
person1.addAge(3);

console.log(person1.printInfo());
console.log(person2.printInfo());

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/
fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
.then((response) => {  
    return response.json()
})
.then ((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('Promise Issue', err)
})

//await has to have async 
const driverStandings_data = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
}

driverStandings_data()


// ============= Codewars #1 ============//
// Problem: Beginner - Lost Without a Map: Given an array of integers, return a new array with each value doubled.
// Example: [1, 2, 3] --> [2, 4, 6]
// .map() method allows to call back the function to create a new list. 
// used .map method on this to be able to create a new list from calling back my maps function 
let num_list = [1, 2, 3];
let new_list = num_list.map(maps);

function maps(x) {
        return x * 2;
}
console.log(new_list)

// Other Solution Below: used the .map method on the array to be able to allow "value to be multiplied by 2 "
// function maps(x){
//     return x.map(function(value) {
//      return value * 2;
//      });
//    }


// ============= Codewars #2 ============//
// Problem: Count the Monkeys: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// Example (Input --> Output): 
    // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // 1 --> [1]

// Notes: n will be my place holder for the amount of monkeys 
// Notes: create a list with all the numbers up to the 'n" 
// Notes: should increase incrememnts up to the "n"
// Notes: I should have an empty array since I have to return the array 
// use i++ for incrememnting by 1, should also do i=1 to start at index 1 (per instructions)
// .push methods add new element to the end of the list, I will use the push method to push it into new array

function monkeyCount(n) {
    let monkey_list = [];
    for (let i = 1; i <=n; i++) {
        monkey_list.push(i)
    }
        return monkey_list
} 
    
console.log(monkeyCount(30))
console.log(monkeyCount(4))
