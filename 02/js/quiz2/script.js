const replaceMe = `TODO: Complete the exercise!`;

/**
 * Exercise 1: 
 * Given  numbers x,y,z
 * 
 * Calculate the average of x,y, and z and store it in the variable `result1`
 */
const x = 55;

const y = 93;

const z = 77;

const result1 = replaceMe;

/**
 * Exercise 2:
 * Given strings city, province, postalCode
 * 
 * Calculate the new string that formats this information as follows:
 * {city}, {province} postalCode
 * 
 * Example
 * city: Vancouver
 * province: BC
 * postalCode: V3K 1H2
 * 
 * result2:
 * Vancouver, BC V3K 1H2
 */

const city = "Williams Lake";

const province = "BC";

const postalCode = "V2G 9Y2";

const result2 = replaceMe;

/**
 * Exercise 3:
 * Given a string array `months` of month names
 * 
 * Calculate a string that consisting of these month names separated by a 
 * comma and a space
 * 
 * Example
 * months: ['January','February','March']
 * 
 * result3: "January, February, March"
 */

const months = ['April','June','November'];

const result3 = replaceMe;

/**
 * DO NOT MODIFY CODE BELOW THIS LINE!
 */

const result = {
    result1,
    result2,
    result3,
}

document.querySelector('#resultLog').textContent = JSON.stringify(result,null,4)

