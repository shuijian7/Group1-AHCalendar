/**
 * *********************************************
 * Testing for for Jest to test file note.js   *
 * CIS422 Winter 2019 Group1                   *
 * Author: Jarvis Dong                         *
 * *********************************************
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
