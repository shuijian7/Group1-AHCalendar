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

 /*  this 6 lines are importing functions
    getUID, previousMonth, fillPartialMonthData,
    nextMonth, updateCurrentDates, appendSpriteToCellAndTooltip
    as Objects from file date.js
*/
const {getUID} = require('../js/date');
const {previousMonth} = require('../js/date');
const {fillPartialMonthData} = require('../js/date');
const {nextMonth} = require('../js/date');
const {updateCurrentDates} = require('../js/date');
const {appendSpriteToCellAndTooltip} = require('../js/date');


test("check getUID behavior/property", () => {
    expect(getUID).toBeDefined;
    expect(getUID).toBeInstanceOf(Function);
    expect(getUID).toHaveReturned;
    expect(getUID).toHaveBeenCalled;
});

test("check previousMonth behavior/property", () => {
    expect(previousMonth).toBeDefined;
    expect(previousMonth).toBeInstanceOf(Function);
    expect(previousMonth).toHaveReturned;
    expect(previousMonth).toHaveBeenCalled;
});

test("check fillPartialMonthData behavior/property", () => {
    expect(fillPartialMonthData).toBeDefined;
    expect(fillPartialMonthData).toBeInstanceOf(Function);
    expect(fillPartialMonthData).toHaveReturned;
    expect(fillPartialMonthData).toHaveBeenCalled;
});

test("check nextMonth behavior/property", () => {
    expect(nextMonth).toBeDefined;
    expect(nextMonth).toBeInstanceOf(Function);
    expect(nextMonth).toHaveReturned;
    expect(nextMonth).toHaveBeenCalled;
});

test("check updateCurrentDates behavior/property", () => {
    expect(updateCurrentDates).toBeDefined;
    expect(updateCurrentDates).toBeInstanceOf(Function);
    expect(updateCurrentDates).toHaveReturned;
    expect(updateCurrentDates).toHaveBeenCalled;
});

test("check appendSpriteToCellAndTooltip behavior/property", () => {
    expect(appendSpriteToCellAndTooltip).toBeDefined;
    expect(appendSpriteToCellAndTooltip).toBeInstanceOf(Function);
    expect(appendSpriteToCellAndTooltip).toHaveReturned;
    expect(appendSpriteToCellAndTooltip).toHaveBeenCalled;
});


test("getUID should generate date ID yyyy-mm-dd", () => {
    const id1 = getUID(5,2019,30);
    const id2 = getUID(10,2020,5);
    const id3 = getUID(12,2019,3);
    const id4 = getUID(9,2018,7);
    expect(id1).toBe("2019-05-30");
    expect(id2).toBe("2020-10-05");
    expect(id3).toBe("2020-00-03"); //it's designed to have month string to be 0 when month=12
    expect(id4).toBe("2018-09-07");
});