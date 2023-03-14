/**
 * Assignment 2 JavaScript Playground
 * 
 * This set of exercises will give you some practice with writing JavaScript
 * to solve some simple data manipulation problems. This is in preparation
 * of the next module, where you will apply these skills in the context
 * of a simple web app.
 * 
 * This script has already been linked to `index.html` in this directory for you.
 * Open `index.html` in the browser to see your results. Be sure to refresh
 * as you code. Don't be afraid to throw in a `Console.log(...)` and use the 
 * developer tools in the browser for troubleshooting!
 */

/**
 * Exercise 1
 * 
 * Given the numbers x,y,z
 * calculate the average and store it in a variable called `result1`.
 *
 */
const x = 5;

const y = 10;

const z = 15;

// TODO Calculate the average on the right hand side on the line below
const result1 = undefined;

/**
 * Exercise 2
 * 
 * Given a string `playerName` and a number `score`, create a new string `result2`
 * with the format "{playerName}: {score}", for example
 * if `playerName` is "Julie" and `score` is 85, `result2` should be "Julie: 85"
 */
const playerName = "Julie";

const score = 85;

const result2 = undefined;

/**
 * Exercise 3
 * 
 * Given an array of string user names (e.g. ["Jane Doe", "John Deer"])
 * create a single string greeting message that reads
 * "Hello Jane Doe, Hello John Deer, ..." and store this string in a variable
 * called result3.
 */

const visitors = [
    'Jane Doe',
    'John Deer',
    'Dolly Wallhy',
    'Hugh Jart'
];

// TODO Loop through the `visitors` array and create one big greeting message

const result3 = undefined;

/**
 * Exercise 4
 * Given an array of numbers,a,
 * use the built in Array method `map` to double every number in the array.
 */

const a = [3, 4, 12, 8, 16, 20, 22, 3.5, 2.2, 1, 7];

// TODO Use `a.map(...)` to calculate a new Array whose elements are double those of `a`.
const result4 = undefined;

/**
 * Exercise 5
 * Given an array of integers, first count the number of even numbers in the array.
 * If **more** than half of the elements are even, store the string "even" in a
 * new variable `result5`. Otherwise, store "odd". Note that we won't worry about
 * the case where there are as many even as odd.
 */
const integers = [3, 4, 5, 7, 12, 10, 9, 33, 6, 11, 22, 19, 27, 15, 13];

// TODO Update the right hand side below!
const numberOfEvenElements = undefined;

// You may change this to `let result5;` and change ("mutate") the value of `result5` in an if...else block if necessary.
const result5 = undefined;

/**
 * Exercise 6 (Challenge- extra marks)
 * 
 * Implement a function `takeAverage` that takes in an array of numbers and
 * returns the average. 
 */

/**
 * 
 * @param {number[]} numbers an array of numbers to average, e.g. `[92,77,84]`
 * @returns 
 */
const takeAverage = (numbers) => {
    return undefined;
}

const result6 = takeAverage([10, 30, 50]);

/**
 * DO NOT MODIFY BELOW THIS LINE
 * 
 * Instructor use only.
 */
const renderResult = (tag, result) => document.getElementById(tag).innerText = JSON.stringify(result);

[[result1, '1'], [result2, '2'], [result3, '3'], [result4, '4'], [result5, '5'], [result6, '6']].forEach(
    ([value, exerciseLabel]) => renderResult(`e${exerciseLabel}`, value)
)


