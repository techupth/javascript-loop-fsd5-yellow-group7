// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

let i = 0;
while (i < restaurants.length) {
  newRestaurants.push("Restaurant Name: " + restaurants[i]);
  i++;
}

console.log(newRestaurants);
