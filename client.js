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

// variable for the current number of eaters
let eaters = 4;

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

// figure out how much of ingredients are needed per person
let mealOne = {
  eggs: 2,
  baconStrips: 3
}

// number of choc chips pancakes needed per person
let mealTwo = {
  chocChipPancake: 3
}

// number of pancakes per mix
let pancakeBatch = 10;

// number of choc chips per pancake
let chocChipPerPancake = 15;

// breakfast checker function
function breakfastChecker(contents) {
  // Create if conditional to make sure total pancakes available will be enough for all eaters
  console.log('in breakfastChecker function, total complete pancake meals:', makePancakes(contents));
  console.log('in breakfastChecker function, total complete eggs and bacon meals:', makeEggsAndBacon(contents));
  
  if (eaters * mealTwo.chocChipPancake <= makePancakes(contents)) {
    return 'Yes';
  }

   // Create if conditional to make sure total pancakes available will be enough for all eaters
   else if (eaters <= makeEggsAndBacon(contents)) {
    return 'Yes';
  }

  // return false if no ingredients are available
  else if (makePancakes(contents) === 0 || makeEggsAndBacon(contents) === 0)
    return 'No';

  // need this else statement so that you don't get undefined after calculations
  else {
    return 'No';
  }

//  end breakfastChecker function
}

// function to create max pancake meals
function makePancakes(contents) {
  let makePancakeBatch = Math.floor(contents.pancakeMixBags * pancakeBatch);
  let enoughChocChips = Math.floor(contents.chocolateChips / chocChipPerPancake);

  if ( makePancakeBatch <= enoughChocChips ) {
    // console.log('total amount of pancakes you can make based off mix bags', makePancakeBatch);
    return makePancakeBatch;
  }

  else if ( makePancakeBatch > enoughChocChips) {
    // console.log('total amount of pancakes you can make based off choc chips', enoughChocChips);
    return enoughChocChips;
  }

  else {
    return 0;
  }
//end makePancakes function
}

// function to create total amount of eggs and bacon meals with current contents
function makeEggsAndBacon(contents) {
  let eggMeals = Math.floor(contents.eggs / mealOne.eggs);
  let baconMeals = Math.floor(contents.baconStrips / mealOne.baconStrips);

  if ( eggMeals <= baconMeals ) {
    // console.log('total meals based off eggs:', eggMeals);
    return eggMeals;
  }

  else if ( eggMeals > baconMeals) {
    // console.log('total meals based off bacon:', baconMeals);
    return baconMeals;
  }

  else {
    return 0;
  }
//end makeEggsAndBacon function
}

// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents));