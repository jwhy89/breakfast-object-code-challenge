// Current items in the pantry
let pantryContents  = {
  pancakeMixBags: 1,
  chocolateChips: 20,
};

// Current items in the refrigerator
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

// figure out how much of ingredients are needed per person
let mealOne = {
  eggs: 2,
  baconStrips: 3
}
console.log(mealOne);

// number of choc chips pancakes needed per person
let mealTwo = {
  chocChipPancake: 3
}
console.log(mealTwo);

// number of pancakes per mix
let pancakeBatch = 10;

// number of choc chips per pancake
let pancake = 15;

// variable for the current number of eaters
let eaters = 4;

// breakfast checker function
function breakfastChecker(contents) {
  // return false if no ingredients are available
  if (makePancake(contents) === 0)
    return false;

  // Create if conditional to make sure total pancakes need are me
  else if (eaters * mealTwo.chocChipPancake <= makePancake(contents)) {
    return true;
  }

  // need this else statement so that you don't get undefined after calculations
  else {
    return false;
  }
}//}  end breakfastChecker function

// function to create pancake
function makePancake(contents) {
  let makePancakeBatch = contents.pancakeMixBags * pancakeBatch;
  let enoughChocChips = contents.chocolateChips / pancake;

  if ( makePancakeBatch <= enoughChocChips ) {
    console.log(makePancakeBatch);
    return makePancakeBatch;
  }

  if ( makePancakeBatch > enoughChocChips) {
    console.log(enoughChocChips);
    return enoughChocChips;
  }

//end make pancake function
}

// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));