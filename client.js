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
  if (eaters * mealTwo.chocChipPancake <= makePancake(contents))
    return true;

  // Create if conditional to look through values
  else if (makePancake(contents) === 0) {
    return false;
  }
  else if (eaters * mealTwo.chocChipPancake === 0 ) {
    return false;
  }
  else {
  return false;
  }
}//}  end breakfastChecker function

// function to create pancake
function makePancake(contents) {
  let makePancakeBatch = contents.pancakeMixBags * pancakeBatch;
  let enoughChocChips = contents.chocolateChips / pancake;
//  let maxPancakes= 1;

  if ( makePancakeBatch <= enoughChocChips ) {
    console.log(makePancakeBatch);
    return makePancakeBatch;
  }

  if ( makePancakeBatch > enoughChocChips) {
    console.log(enoughChocChips);
    return enoughChocChips;
  }

} //end make pancake function

// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));