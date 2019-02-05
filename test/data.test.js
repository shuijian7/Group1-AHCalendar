/**
 * *********************************************
 * Testing for for Jest to test file data.js   *
 * CIS422 Winter 2019 Group1                   *
 * Author: Jarvis Dong                         *
 * *********************************************
 */

const month_data = require('../js/data');
const data = require('../js/data');

test("check month_data properties", () => {
    expect(month_data).toBeDefined;
    expect(month_data).toBeCalled;
    expect(month_data).toBeInstanceOf(Object);
    // expect(month_data_array).toHaveLength(38);
});

test("check data properties", () => {
    expect(data).toBeDefined;
    expect(data).toBeCalled;
    expect(data).toBeInstanceOf(Object);
});

test("check month_data data correctness", () => {

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
    const month_data11 = month_data.month_data[10];
    const month_data12 = month_data.month_data[11];

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
    expect(month_data11).toEqual(
        {   
            "month_index": 9,
            "amount_of_days": 31,
            "starting_day": 1,
            "year": 2018
        }  
    );
    expect(month_data12).toEqual(
        {   
            "month_index": 10,
            "amount_of_days": 30,
            "starting_day": 4,
            "year": 2018
        }  
    );
});