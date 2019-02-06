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

/*  this two lines are importing Objects
    month_data and data as Objects from file data.js
*/
const month_data = require('../js/data');
const data = require('../js/data');

test("check month_data properties", () => {
    expect(month_data).toBeDefined;
    expect(month_data).toBeCalled;
    expect(month_data).toBeInstanceOf(Object);
});

test("month_data.month_data should be a array with length 38",() => {
    expect(month_data.month_data).toBeInstanceOf(Array); // month_data.month_data should be a Array<dictionary>
    expect(month_data.month_data).toHaveLength(38); //month_data should have length 38, from 2017-11-31 to 2021-0-31
});

test("check data properties", () => {
    expect(data).toBeDefined;
    expect(data).toBeCalled;
    expect(data).toBeInstanceOf(Object);
});

test("data.data should be a array with length 2", () => {
    expect(data.data.current_modal_popup).toBe(0);
});

test("data calendar should have month and year with default value", () => {
    const month = data.data.calendar["month"];
    const year = data.data.calendar["year"];

    expect(month).toEqual("Default");
    expect(year).toEqual("Default");
});

test("data calendar should be a type of dictionary", () => {
    const calendar = data.data.calendar;
    expect(calendar).toBeInstanceOf(Object);
    expect(calendar).toEqual(
        {
            month: "Default",
            year: "Default"
        }
    )
});

test("check first 12 month_data data correctness", () => {

    const month_data1 = month_data.month_data[0];
    const month_data2 = month_data.month_data[1];
    const month_data3 = month_data.month_data[2];
    const month_data4 = month_data.month_data[3];
    const month_data5 = month_data.month_data[4];
    const month_data6 = month_data.month_data[5];
    const month_data7 = month_data.month_data[6];
    const month_data8 = month_data.month_data[7];
    const month_data9 = month_data.month_data[8];
    const month_data10 = month_data.month_data[9];


    /* 
    expect to see if first 12 items in Object month_data
    match exactly the same as we want
    */
    expect(month_data1).toEqual(
        {   
            "month_index": 11,
            "amount_of_days": 31,
            "starting_day": 5,
            "year": 2017
        }  
    );
    expect(month_data2).toEqual(
        {   
            "month_index": 0,
            "amount_of_days": 31,
            "starting_day": 1,
            "year": 2018
        }  
    );
    expect(month_data3).toEqual(
        {   
            "month_index": 1,
            "amount_of_days": 28,
            "starting_day": 4,
            "year": 2018
        }  
    );
    expect(month_data4).toEqual(
        {   
            "month_index": 2,
            "amount_of_days": 31,
            "starting_day": 4,
            "year": 2018
        }  
    );
    expect(month_data5).toEqual(
        {   
            "month_index": 3,
            "amount_of_days": 30,
            "starting_day": 0,
            "year": 2018
        }  
    );
    expect(month_data6).toEqual(
        {   
            "month_index": 4,
            "amount_of_days": 31,
            "starting_day": 2,
            "year": 2018
        }  
    );
    expect(month_data7).toEqual(
        {   
            "month_index": 5,
            "amount_of_days": 30,
            "starting_day": 5,
            "year": 2018
        }  
    );
    expect(month_data8).toEqual(
        {   
            "month_index": 6,
            "amount_of_days": 31,
            "starting_day": 0,
            "year": 2018
        }  
    );
    expect(month_data9).toEqual(
        {   
            "month_index": 7,
            "amount_of_days": 31,
            "starting_day": 3,
            "year": 2018
        }  
    );
    expect(month_data10).toEqual(
        {   
            "month_index": 8,
            "amount_of_days": 30,
            "starting_day": 6,
            "year": 2018
        }  
    );
});

test("the last item in array should have month_index 0 instead of 12", () => {
    expect(month_data.month_data[37]["month_index"]).toBe(0);
});

test("year 2020, October should start with day 0", () => {
    expect(month_data.month_data[35]["starting_day"]).toBe(0);
});

test("year 2020 should be 2021 if month_index is 0", () => {
    expect(month_data.month_data[37]["year"]).toBe(2021);
});

test("check all the starting day for each month of each year", () => {
    starting_day = new Array(38); 
    for (var i=0; i<38;i++) {
        starting_day[i] = month_data.month_data[i]["starting_day"];
    }
    expect(starting_day).toBeInstanceOf(Array); //to check if new data structure is construncted right
    expect(starting_day).toEqual([5,1,4,4,0,2,5,0,3,6,1,
                                  4,6,2,5,5,1,3,6,1,4,7,
                                  2,5,0,4,6,0,3,5,1,3,6,
                                  2,4,0,2,5]);
});

test("check all year value for each year in month_data", () => {
    year = new Array(38);
    for (var i=0; i<38;i++) {
        year[i] = month_data.month_data[i]["year"];
    }
    expect(year).toBeInstanceOf(Array); //to check if new data structure is construncted right
    expect(year).toEqual([2017,2018,2018,2018,2018,2018,2018,2018,
                          2018,2018,2018,2018,2018,2019,2019,2019,
                          2019,2019,2019,2019,2019,2019,2019,2019,
                          2019,2020,2020,2020,2020,2020,2020,2020,
                          2020,2020,2020,2020,2020,2021])
});