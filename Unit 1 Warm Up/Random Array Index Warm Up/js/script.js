/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Random Array Index - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variable to store play button by id for event listener assignment below - You can ignore this */
const playBtn = document.querySelector('#play-btn');

/* Variables to store DOM elements that display player's scores - You'll use these variables in the event listener below */
const scoreOneElement = document.querySelector('#score-1');
const scoreTwoElement = document.querySelector('#score-2');

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1) Uncomment the array below
const twelveSidedDie = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


// 2) Create a function named diceRoll.  Give it a parameter called array — this goes in the parens.
  // 2a) Create a variable that uses `Math.floor`, `Math.random` and the length of the array parameter to generate a random number
  // NOTE: Introducing Functions video — https://teamtreehouse.com/library/introducing-functions-in-javascript
  // NOTE: Create a Random Number video — https://teamtreehouse.com/library/create-a-random-number


  // 2b) `return` the random number variable
  function diceRoll (array){
    let randomInput = Math.floor(Math.random() * array.length );
    return randomInput

  };

// 3) Complete the steps in the comments in the event listener below


/**
 * Event listeners for playBtn - Write code in the body of the callback in the event listener below to complete this exercise
 */
playBtn.addEventListener('click', () => {

  // YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

  // 4) Create two variables to store player one and player two scores
    // 4a) Set both variables equal to a call to the `diceRoll` function - Arguments: twelveSidedDie

    let scorePlayerOne = diceRoll(twelveSidedDie);
    let scorePlayerTwo = diceRoll(twelveSidedDie);
     


  // 5) Log out the two variables above to test their values — check them out in the console
console.log(scorePlayerOne);
console.log(scorePlayerTwo);

  // 6) Set the innerHTML of the `scoreOneElement` and `scoreTwoElement` variables above equal to the dice roll variables you just created
  scoreOneElement.innerHTML = scorePlayerOne; 
  scoreTwoElement.innerHTML = scorePlayerTwo;

  // Helpful log statement to test function — You can comment out this if you like
  console.log('Play button is functional!');

  // Calling helper function from color-changer.js to set the color of the results
  updateColors(scoreOneElement, scoreTwoElement);
});