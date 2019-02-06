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
const { dayClicked } = require('../js/note');
const { openPostIt } = require('../js/note');



test("check dayClicked behavior/property", () => {
    expect(dayClicked).toBeDefined;
    expect(dayClicked).toBeInstanceOf(Function);
    expect(dayClicked).toHaveReturned;
    expect(dayClicked).toHaveBeenCalled;
});

test("check openPostIt behavior/property", () => {
    expect(openPostIt).toBeDefined;
    expect(openPostIt).toBeInstanceOf(Function);
    expect(openPostIt).toHaveReturned;
    expect(openPostIt).toHaveBeenCalled;    
});
