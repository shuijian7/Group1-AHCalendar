/**
 * ********************************************
 * Testing for for Jest to test file data.js   
 * CIS422 Winter 2019 Group1                   
 * Author: Jarvis Dong, Micheal Zhang          
 * Last Updated: Feb 5th 2019
 * For more information: go here 
 * https://github.com/shuijian7/Group1-Calendar/blob/master/Documents/Testing%20Documentation.pdf              
 * ********************************************
 */


/*  this two lines are importing functions
    removeClass and removeAttribute as Objects
    from file main.js
*/
const { removeClass } = require('../js/main');
const { removeAttribute } = require('../js/main');

test("check removeClass behavior/property", () => {
    expect(removeClass).toBeDefined;
    expect(removeClass).toBeInstanceOf(Function);
    expect(removeClass).toHaveReturned;
    expect(removeClass).toHaveBeenCalled;
});

test("check removeAttribute behavior/property", () => {
    expect(removeAttribute).toBeDefined;
    expect(removeAttribute).toBeInstanceOf(Function);
    expect(removeAttribute).toHaveReturned;
    expect(removeAttribute).toHaveBeenCalled;
});
