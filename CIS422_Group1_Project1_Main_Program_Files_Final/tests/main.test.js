/**
 * *********************************************
 * Testing for for Jest to test file main.js   *
 * CIS422 Winter 2019 Group1                   *
 * Author: Jarvis Dong, Michael Zhang          *
 * *********************************************
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

// test("removeClass should remove class from elem", () => {
// });

// test("removeAttribute should remove attribute from elem", () => {
// });