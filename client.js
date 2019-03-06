let pantryContents  = {
  pancakeMixBags: 1,
  chocolateChips: 20,
};

let refrigeratorContents  = {
  eggs: 4,
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  tomatoes: 1,
  onions: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

// figure out how much of ingredients are need per person
let mealOne = {
  eggs: 2,
  baconStrips: 3
}
console.log(mealOne);

let mealTwo = {
  chocChipPancake: 3
}
console.log(mealTwo);

let pancakeBatch = 10; // number of pancakes per mix
let pancake = 15; // number of choc chips per pancake

let eaters = 4;

// breakfast checker function
function breakfastChecker(contents) {
  // Your code goes here
//  for ( let checker of contents ) {
  let checker = contents
  // Create if conditional to look through values
  if ( eaters * mealTwo.chocChipPancake >= ( checker.pancakeMixBags * pancakeBatch ) * ( checker.chocolateChips / pancake ) ) {
    return true;
  }
  else if (0 >= (checker.pancakeMixBags / pancakeBatch) * (checker.chocolateChips / pancake)) {


  } else {
    return false;}
} // end for loop
//}  end breakfastChecker function



// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));