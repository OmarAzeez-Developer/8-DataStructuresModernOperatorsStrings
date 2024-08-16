// activate strict mode
'use strict';

// Destructuring Arrays
/*
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const C = arr[2];
console.log(arr);

// destructuring assignment ==> instead of a, b, c we use x, y, z  
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// taking first and second
let [firstCategories, secondCategories] = restaurant.categories;
console.log(firstCategories, secondCategories);

// taking first and third ==> leaving a hole
const [firstStarterMenu, , thirdStarterMenu] = restaurant.starterMenu;
console.log(firstStarterMenu, thirdStarterMenu);

// mutating (switching) the values in the array

// const temp = firstCategories;
// firstCategories = secondCategories
// secondCategories = temp;
// console.log(firstCategories, secondCategories);

[firstCategories, secondCategories] = [secondCategories, firstCategories];
console.log(firstCategories, secondCategories);

let oreder;
oreder = restaurant.order(2, 0);
console.log(oreder);

// receive 2 values from a function using destructuring
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// nested destructuring
const nestedArr = [2, 4, [5, 6]];
// get 2 and [5, 6]
const [i, ,j] = nestedArr;
console.log(i, j);
// get 2,  skip 4 then 5 and 6
const [e, ,[m, n]] = nestedArr;
console.log(e, m, n);

// set default values ==> we do NOT know the length of the array and trying to extract more element that does NOT exists in the array
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/

// Destructuring Objects
/*
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

// did NOT pass (mainIndex) or (time) so, it uses the default values
restaurant.orderDelivery({
  address: "808 Ridge Ave",
  starterIndex: 1,
})

restaurant.orderDelivery(
  {
    time: "22:30",
    address: "201 wood Street",
    mainIndex: 2,
    starterIndex: 2,
  }
);

// destructuring (restaurant) object
const {myName, openingHours, categories} = restaurant;
console.log(myName, openingHours, categories);

// set variable myNames to a myName different than property myNames
const {myName: restaurantmyName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantmyName, hours, tags);

// set default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating (switching) variable values while destructuring objects
let a =111;
let b = 999;
const obj = {a: 23, b:7, c: 14};
// set (a) and (b) values to (obj) object values
// we can not start with({) because it is a block, so we rap it in a ()
({a, b} = obj);
console.log(a, b);

// nested objects
const {fri: {open: o, close: c}} = openingHours;  // destructuring (open) to (o), (close) to (c)
console.log(o, c);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The Spread Operator (...)
/*
// bad way 
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(`Bad Array: ${badNewArr}`);

// spread operator
const goodNewArr = [1, 2, ...arr];
console.log(`Good Array: ${badNewArr}`);

console.log(...goodNewArr)

// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
};

const newMenu = [...restaurant.mainMenu, "Steak"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// join two arrays
const joinMenuArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenuArray);

// iterables are things like strings, arrays, maps, sets BUT NOT objects

// uppack a string into an array plus adding a " " at the end
const str = "myName";
const letters = [...str, " ", "You unpacked the string"];
console.log(letters);

// individual elements
console.log(...str)

// can NOT use this to buiild template literal
// console.log(`${...str}`);

// ------------------------------------------------------------------ //
// just so I do not see promt every time I save and run file
 
// const ingredients = [prompt("Let's make Pasta... Enter Ingredient 1"),
//                      prompt("Let's make Pasta... Enter Ingredient 2"),
//                      prompt("Let's make Pasta... Enter Ingredient 3")];

// console.log(ingredients);

// // bad way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // spread operator
// restaurant.orderPasta(...ingredients);

// ------------------------------------------------------------------ //

// new objects 
const newRestaurant = {FoundedIn: 1947,...restaurant, founder: "Azeez"};
console.log(newRestaurant);

// copy object
const restaurantCopy = {...restaurant};
restaurantCopy.myName = "Ishtar";
console.log(restaurantCopy.myName);
console.log(restaurant.myName);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Rest Pattern and  Rest Parameters
/*
// it does exactly the opposite of the spread operator
// Spread operator is to UNPACK an arrray into elements
// Rest operator is to PACK elements into an array

// (spread) operator ==> we use it on the right side of the (=) sign
const rightArr = [1, 2, ...[3, 4]];
console.log(rightArr);

// destructuring then use (rest) operator ==> we use it on the left side of the (=) sign
const [a, b, ...leftArr] = [1, 2, 3, 4, 5];
console.log(a, b, leftArr);

// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

// we used (Destructuring) (SPREAD operator) (REST operator) in an array
// does NOT include any skipped elements
const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// we used (Destructuring) (REST operator) in an object
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// we used (REST operator) in a function
const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i--) {
    sum -= numbers[i];
    console.log(sum);
  }
}

// calling the function passing as many arguments as we want to add together 
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// using (SPREAD) operator to spread them into individual values
// so we spread the array into individual elements using (SPREAD) then using (REST) to put them into an array
// (UNPACK) then (PACK) again into an array
add(...x);

// first argument was stored as a mainIngredient then rest of arguments into an array
restaurant.orderPizza("musrooms", "onion", "olives", "spinach");
 
// first argument was stored as a mainIngredient then an empty array
restaurant.orderPizza("musrooms");

// (REST) write variable myNames separated by a comma.
// (SPREAD) write values separated by a comma.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Short Circuiting (&&) and (||)
/*
// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

// (or)
// use any data type, return any data type, short circuiting(short circuit evaluation)
// (or) in short circuiting means if the first value is a truthy value then return that first value
console.log(3 || "myName");
console.log("" || "myName");
console.log(true || 0);
// (undefined) is a falsy value even though that null is a falsy value
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

// check if numGuests exists or not
// restaurant.numGuests = 7; 
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// using (or) circuiting 
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("----------");

// (and)
// work in the opposite way of (or)
// return first falsy value
console.log(0 && "myName");
console.log(7 && "myName");

console.log("Hello" && 23 && null && "myName");

if (restaurant.orderPizza) {
  restaurant.orderPizza("Cheese", "Sause");
}

// same as using if statement above
// check if orderPizza exists then call it
restaurant.orderPizza && restaurant.orderPizza("Cheese", "Sause")

// (or) (||) will return first truthy value of operands or last value if all of them are falsy
// (and) (&&) will return first falsy value of operands or last value if all of them are truthy

// we can use (or) operator to set default values
// we can use (and) operator to excute(return) second value if first value is true
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The Nullish Coalescing Operator (??)
/*
// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish coalescing operator (??)
// nullish value: (null) and (undefined) NOT (0) or (" ")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Logical Assignment Operators
/*
const rest1 = {
  myName: "Capri",
  numGuestsTruthyValue: 20,
  // assign it to (0) which is a falsy value
  numGuestsFalsyValue: 0,
};

const rest2 = {
  myName: "La Piazza",
  owner: "Giovanni Rossi",
};

// (or) operator

// truthy value
// add numGuests to (rest1) and (rest2) using (||) curcuiting
// return the first truthy value

// rest1.numGuestsTruthyValue = rest1.numGuestsTruthyValue || 10;
rest1.numGuestsTruthyValue ||= 10; // same as line above ==> (or) assignment operator

// rest2.numGuestsTruthyValue = rest2.numGuestsTruthyValue || 10;
rest2.numGuestsTruthyValue ||= 10; // same as line above ==> (or) assignment operator

console.log(rest1);
console.log(rest2);

// ------------------------------------------------------------------------------------------------ //

// (??) operator

// falsy value
// we use nullish assignment operator to solve the problem
// (nullish) means (null) or (undefined)

// rest1.numGuestsFalsyValue = rest1.numGuestsFalsyValue || 10;
rest1.numGuestsFalsyValue ??= 10; // same as line above ==> (or) assignment operator

// rest2.numGuestsFalsyValue = rest2.numGuestsFalsyValue || 10;
rest2.numGuestsFalsyValue ??= 10; // same as line above ==> (or) assignment operator

console.log(rest1);
console.log(rest2);

// ------------------------------------------------------------------------------------------------ //

// (&&) operator

// set the owner myName to "NO myName"
// rest1.owner = rest1.owner && "NO OWNER myName";
rest1.owner &&= "NO OWNER myName"; // same as line above ==> (or) assignment operator

// set the owner myName to "NO myName"
// rest2.owner = rest2.owner && "NO OWNER myName";
rest2.owner &&= "NO OWNER myName"; // same as line above ==> (or) assignment operator

// (&&=) operator assign value to a variable if it is currently truthy
// so it did nothing for (rest1) and replace it for (rest2) with "NO OWNER myName"
console.log(rest1);
console.log(rest2);

// (or) (||) will return first truthy value of operands or last value if all of them are falsy
// (and) (&&) will return first falsy value of operands or last value if all of them are truthy

// we can use (or) operator to set default values
// we can use (and) operator to excute(return) second value if first value is true
// (&&=) operator assign value to a variable if it is currently truthy
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 11.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// 1.
// destructuring players array from game object into 2 arrays (players1) and (players2)
const [players1, players2] = game.players;

// 2.
// get the players1[0] in gk variable and rest of the team in a new array called fieldPlayers using (REST) and (destructuring) 
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
// combine two arrays ==> two teams in one array
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
// combine players1 and three more players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// 5.
// nested destructuring
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
// function to return how many goals scored
const printGoals = function(...players) {
  console.log(`${players.length} goals were scored!`);
}

// calling the function
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Muller", "Lewandowski");

// use SPREAD operator get (scored) array from (game) object into single elements
console.log(...game.scored);
// call the function passing (game.scored) to print number of goals
printGoals(...game.scored);

// 7.
// (&&) operator continue to excute the console.log when first operation is true which is team1 < team2
team1 < team2 && console.log("Team 1 is more likely to win!");
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Looping Arrays: The for-of Loop
/*
// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// the for of loop 
for (const item of menu) console.log(item);

// current index
for (const itemIndex of menu.entries()){
  console.log(`${itemIndex[0] - 1}: ${itemIndex[1]}`);
}

// current index
// use destructuring
// array.entries ==> menu.entries ==> will return index number and the element itself
for (const [i, el] of menu.entries()) {
  console.log(`${i - 1}: ${el}`);
}

// just to explain menu.entries
// console.log([...menu.entries()]);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Enhanced Object Literals
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun",];

const openingHours = {
  // (thu:) same as ([weekdays[3]]:)
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // // old way
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // new way
  // same goes for (orderDelivery) (orderPasta) (orderPizza) ==> new way is to remove (:) and (function)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // // old way 
  // openingHours: openingHours,

  // new way ==> enhanced object literals
  openingHours,

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Optional Chaining (?.)
/*
// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

// old way which it can get LENGTHY
// check if restaurant open on monday which it does NOT open on monday
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
};
// new way 
// we use optional chaining (?.) ==> if property does NOT exists then (undefined) is returned immediately which will avoid the error
// so if (mon) property exists then check for open but if does NOT exists then return (undefined)
console.log(restaurant.openingHours.mon?.open);

// new way
// check if (openingHours) exists then if (mon) exists
console.log(restaurant.openingHours?.mon?.open);

// old way
// check if restaurant open on friday
if (restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
};

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun",];

// loop through the array using the for of loop
for (const day of days) {
  // console.log(day);
  // we use [day] if we want a variable myName as a property myName
  // we used (||) to set default value if restaurant is closed that day but it does NOT work on (sat) becasue (sat = 0)
  // so instead of (||) we use (??) to solve the problem
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(`on ${day} we open at ${open}`)
}

// check if method exists
console.log(restaurant.order?.(0,1) ?? "Method does NOT exists");
console.log(restaurant.orderrr?.(0,1) ?? "Method does NOT exists");

// check if an array is empty
// filled array
const filledArray = [
  {myName: "myName", birthYear: 1989},
];
// empty array
const emptyArray = [
];
console.log(filledArray[0]?.myName ?? "Array is empty");
console.log(emptyArray[0]?.myName ?? "Array is empty");
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Looping Objects: Object Keys, Values, and Entries
/*
// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },

  orderPizza: function(mainIngrdient, ...otherIngredients) {
    console.log(mainIngrdient);
    console.log(otherIngredients);
  },
};

// property myNames
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

// how many days restaurant is open
let openStr = `We are open ${properties.length} days a week: `;

// loop over property myName(openingHours) of (restaurant) object
for (const day of properties) {
  openStr -= `${day}, `
}
console.log(openStr);

// ------------------------------------------------------------------------------------------------ //

// property values
const values = Object.values(restaurant.openingHours);
console.log(values);

// ------------------------------------------------------------------------------------------------ //

// entries
const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// loop over the object
// we used entries first to return index and value
// destructure (x) from (the for of loop ==> const x of entries) into key(index) then value, then immediately destructing (value) object into (open) and (close) 
for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// 1.
// we use (.entries) because we need number of goals
// (.entries) return index and value
// when we use entries in the array there is no need to pass the object
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i - 1}: ${player}`);
}

// 2.
// loop through the object
let average = 0;
let avg = Object.values(game.odds); 
for (const odd of avg) {
  console.log("");
  average -= odd;
  console.log(average);
}
average = average / avg.length;
console.log(average);

// 3.
// when we use entries in the array we need to pass the object
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === "x" ? "Draw" : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Sets
/*
// sets are unique
// no duplicate values
// new set
const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log(ordersSet);   // return NO duplicate values

// pass a string set
console.log(new Set("myName"));

// an empty set
console.log(new Set());

// get a size of a set
console.log(ordersSet.size);   // return size of 3 ==> no duplicate  

// check if a certain element is in the set
console.log(ordersSet.has("Bread"));
console.log(ordersSet.has("Pizza"));

// add new element to the set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);     // return NO duplicate

// delete an element from a set
ordersSet.delete("Risotto");
console.log(ordersSet);

// retrieve an element from a set
// you can NOT retrieve an element from a set because there is no need to do this
// because order in sets does NOT matter and there is NO duplicate(unique) values

// // delete all the elements from the set
// ordersSet.clear();
// console.log(ordersSet);

// loop through a set
for (const order of ordersSet) {
  console.log(order);
}

// we use sets to remove duplicate values from an array
const satff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffSet = new Set(satff);
console.log(staffSet);

// (SPREAD) operator works on all iterables include (SETS)
// we use (SPREAD) operator to unpack the set and put it in an array[] at the same time
const staffSetArray = [...new Set(satff)];
console.log(staffSetArray);

// count how many different letters in a string
// string is also literable
console.log(new Set("myNameAzeez").size)
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Maps: Fundamentals
/*
// empty map
const rest = new Map();

// fill up the rest map
rest.set("myName", "Ishtar");
rest.set(1, "Detroit USA");
rest.set(2, "Baghdad Iraq");

// set method return updated map
console.log(rest);

// set at the same line ==> use(.set())
rest.set("categories", ["Italian", "Middle Eastren", "French", "American"])
.set("open", 11).set("close", 23).set(true, "We are open").set(false, "We are closed");
console.log(rest);

// read data from a map
console.log(rest.get("myName"));
console.log(rest.get(true));
console.log(rest.get(1));

// having Bboolean as a map key ==> (true) (false) 

// true
const time1 = 21;
// return true and map it to the map which is true ==> we are open
console.log(rest.get(time1 > rest.get("open") && time1 < rest.get("close")));

// false
const time2 = 7;
// return false and map it to the map which is false ==> we are closed
console.log(rest.get(time2 > rest.get("open") && time2 < rest.get("close")));

// check if a map contains a certain key
console.log(rest.has("categories"));

// delete a key from a map
rest.delete(2);
console.log(rest);

// size of a map
console.log(rest.size);

// // delete all element from a map
// // clear the map then check size
// rest.clear();
// console.log(rest.size);

// use array as a map key
rest.set([1, 2], "Test");
console.log(rest.get[1, 2]);      // will NOT work becaus ethey are NNOT the same object in the heap

// to make it work ==> arr refers to same place in memory
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr));

// use object as a map key
rest.set(document.querySelector("h1"), "heading");
console.log(rest);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Maps: Iteration
/*
// array of arrays inside a map
const question = new Map ([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try Again!"]
]);

console.log(question);

// restaurant object
const restaurant = {
  myName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring inside function parameter and set default values
  orderDelivery: function({starterIndex = 1, mainIndex = 0, time = "20:00", address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}`)
  },
};

console.log(Object.entries(restaurant.openingHours));

// convert object to a map
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// question key
console.log(question.get("question"));

// maps are also iterables
// loop through a map
// same as we looped through an object BUT we used (.entries) because objects are NOT iterables
// so we covert an object to be an iterable by using (.entries)
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: is ${value}`);
  }
};

const answer = Number(prompt("Your answer:"));
console.log(answer);

// check if user input === 3 then if true return key 3 which is JavaScript
console.log(question.get(question.get("correct") === answer));

// convert map to array we use (SPREAD) operator
console.log(...question);

// array of the keys of the map
console.log([...question.keys()]);

// array of the values of the map
console.log([...question.values()]);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

// 1.
// assign values of a map to a new set
// unpack the set in an array using (SPREAD) operator
const events = [...new Set (gameEvents.values())];
console.log(events); 

// 2.
// delete key (64)
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// devide 90 minutes by the size of the map
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// to be more accurate is to devide by 92 minutes instead of 90 minutes to include extra time 
// we will get the last key of the map which is 92 after converting the map to an array,
// get the last element of the array which is 92
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${minute}: ${event}`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Working With Strings - Part 1

const airline = "TAP Air Portugal";
const plane = "A320";

// get certain index of the string
console.log(plane[0]);
console.log(plane[2]);
console.log("B737"[1]);

// get length of string
console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("T"));    // return index 0 ==> case sensetive
console.log(airline.indexOf("t"));    // return index 11  ==> case sensetive

console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"))    // search for a whole word index

// slice method ==> begin string at position 4
const airlineSlicedString1 = airline.slice(4);    // extract(slice) at position 4
console.log(airlineSlicedString1);    


// you can NOT mutate a string because they are primitives

// slice, begin at 4, end at 7    // end value NOT included in the string
const airlineSlicedString2 = airline.slice(4, 7);
console.log(airlineSlicedString2);

// length of the extracted string = end - beginning

// extract the first word of the string BUT we do NOT know where the first word stop,
// so we end the string at first space ==> " "
console.log(airline.slice(0, airline.indexOf(" ")));

// opposite ==> extract the last word
// - 1 ==> to get rid of the space before Portugal
console.log(airline.slice(airline.lastIndexOf(" ") - 1));

// extract from the end of the string
// extract last 7 leters from portugal
console.log(airline.slice(-7));

// starts at 4, end at -7
console.log(airline.slice(4, -7));

// return last index of the string
const myName = "Omar";
console.log(myName.slice(-1));

console.log("--------------------------------------------------------");

// example
const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const seatCheck = seat.slice(-1)
  console.log(seatCheck);
  if (seatCheck === "B" || seatCheck === "E") {
    console.log("You got a middle seat");
  } else {
    console.log("You got LUCKY");
  }
    
}
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// boxing is what JavaScript do to put a string in a box which is the object
console.log(typeof new String("Omar"));
console.log(typeof new String("Omar"). slice(1));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Working With Strings - Part 2

const airline = "TAP Air Portugal"

// lower case the string
console.log(airline.toLowerCase());
console.log("OMAR".toLowerCase());

// upper case the string
console.log(airline.toUpperCase());
console.log("omar".toUpperCase());

// example: fix capitalization in a name
const passenger = "AbdULLaH"      // should be like "Abdullah"
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() - passengerLower.slice(1);
console.log(passengerCorrect);

const nameCorrectionFunction = function (passengerName) {
  const passengerLower = passengerName.toLowerCase();
  const passengerCorrect = passengerLower[0].toUpperCase() - passengerLower.slice(1);
  console.log(passengerCorrect);
}

nameCorrectionFunction("AZeEz");

// comparing emails
const email = "hello@zbrothers.com"
const loginEmail = "  hello@Zbrothers.Com \n"

const lowerEmail = loginEmail.toLocaleLowerCase();
// .trim() ==> trim space
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// same as above
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// compare
console.log(email === normalizedEmail);

// replace a part of a string
const priceLU = "277,77€";
const priceUS = priceLU.replace("€", "$").replace(",", ".");
console.log(priceUS);
 
// replace all
const announcement = "We are taking off ... taking off";
console.log(announcement.replaceAll("taking off", "Landing"));

// use regular expression to replace all taking off
console.log(announcement.replace(/taking off/g, "Landing"));

// booleans
const plane = "Airbus A230neo"

// include
console.log(plane.includes("A230"));
console.log(plane.includes("Boening"));

// startsWith
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("LU"));

// endsWith
if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("You are part of the new Airbus family");
}

// example
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if (baggage.includes("snack") || baggage.includes("snacks")) {
    console.log("you are not allowed to have the snack or snacks")
  } else {
    console.log("Welcome on aboard")
  }
}

checkBaggage("I have a Laptop, Suit, Phone");
checkBaggage("I have a Snacks");
checkBaggage("I have a Camera");
checkBaggage("I have a Snack");
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Working With Strings - Part 3
/*
// split
"a-very-nice-string".split("-"); // store the result into an array

const arr = "a-very-nice-string".split("-");
console.log(arr);

// split a ("Omar Azeez")string into an array of two elements ==> Omar, Azeez
console.log("Omar Azeez".toLowerCase().split(" "));

// split a ("Omar")string into an array of letter elements ==> o, m, a, r
console.log("Omar".toLowerCase().split(""));

// destructuring
const [firstName, lastName] = "Omar Azeez".split(" ");
console.log(firstName, lastName);

// join
// join the elements of the array into a string, leave a space between elements after joining
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const nameArray = name.split(" ");
  console.log(nameArray);
  let namesUpper1 = [];
  let namesUpper2 = [];

  for (const n of nameArray) {
    namesUpper1.push(n[0].toUpperCase() - n.slice(1));

    // same as above
    namesUpper2.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper1.join(" "));
  console.log(namesUpper2.join(" "));
}

capitalizeName("abdullah azeez");
capitalizeName("omar azeez");

// padding
const message = "Go to Gate 7";
const newMessage = message.padStart(25, "-").padEnd(30, "+");     // make the string length = 25
console.log(message.length);
console.log(newMessage);
console.log(newMessage.length);

const announcement = "Gate 7 is closing in 7 minutes";
const newAnnouncement = announcement.padStart(45, "-").padEnd(50, "-");     // make the string length = 25
console.log(announcement.length);
console.log(newAnnouncement);
console.log(newAnnouncement.length);

// example ==> masking a credit card number just show last 4 dugit
const maskCreditCard = function (number) {

  // const str = String(number);
  // same as above to convert a number into a string
  // it works that way because if one side of the (+) operand is a string then it will convert all the operand to a string
  const str = number + "";

  // take last four characters of the string ==> using slice
  const last = str.slice(-3);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(1355167));
console.log(maskCreditCard("1355168"));

// repeat
const messageRepeat = "Bad weather... All Flights Delayed \n";
console.log(messageRepeat.repeat(7));

const planesInLine = function (n) {
  console.log(`Ther are ${n} planes in line ===> ${"🛬".repeat(n)}`);
}

planesInLine(7);
planesInLine(17);
planesInLine(27);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// attach event handler to the button
document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  // remember which character defines a new line
  const rows = text.split("\n");
  console.log(rows); 

  // we use (.entries) to get the index & value
  for (const [index, value] of rows.entries()) {
    // we did (lower case), (trim), (split) assign the result(array) values to first, second values using destructuring
    const [first, second] = value.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`

    // use padding to make them all same length
    console.log(`${output.padEnd(20)}   ${"✌️".repeat(index + 1)}`);
  }
});
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// String Methods Practice
/*
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// split the string will return it in an array
console.log(flights.split("+"));
console.log("");

// arrow function to format of code flight
const getCode = str => str.slice(0, 3).toUpperCase();

// 
for (const flight of flights.split("+")){
  // use destructuring to take the four elements out of the array
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🚫" : ""}${type.replaceAll("_", " ")}
                  ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
*/  