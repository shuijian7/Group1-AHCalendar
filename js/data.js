var month_data = new Array(
    {
        month_index: 11,
        amount_of_days: 31,
        starting_day: 5,
        year: 2017
    }, {
        month_index: 0,
        amount_of_days: 31,
        starting_day: 1,
        year: 2018
    }, {
        month_index: 1,
        amount_of_days: 28,
        starting_day: 4,
        year: 2018
    }, {
        month_index: 2,
        amount_of_days: 31,
        starting_day: 4,
        year: 2018
    }, {
        month_index: 3,
        amount_of_days: 30,
        starting_day: 0,
        year: 2018
    }, {
        month_index: 4,
        amount_of_days: 31,
        starting_day: 2,
        year: 2018
    }, {
        month_index: 5,
        amount_of_days: 30,
        starting_day: 5,
        year: 2018
    }, {
        month_index: 6,
        amount_of_days: 31,
        starting_day: 0,
        year: 2018
    }, {
        month_index: 7,
        amount_of_days: 31,
        starting_day: 3,
        year: 2018
    }, {
        month_index: 8,
        amount_of_days: 30,
        starting_day: 6,
        year: 2018
    }, {
        month_index: 9,
        amount_of_days: 31,
        starting_day: 1,
        year: 2018
    }, {
        month_index: 10,
        amount_of_days: 30,
        starting_day: 4,
        year: 2018
    }, {
        month_index: 11,
        amount_of_days: 31,
        starting_day: 6,
        year: 2018
    }, {
        month_index: 0,
        amount_of_days: 31,
        starting_day: 2,
        year: 2019
    }, {
        month_index: 1,
        amount_of_days: 28,
        starting_day: 5,
        year: 2019
    }, {
        month_index: 2,
        amount_of_days: 31,
        starting_day: 5,
        year: 2019
    }, {
        month_index: 3,
        amount_of_days: 30,
        starting_day: 1,
        year: 2019
    }, {
        month_index: 4,
        amount_of_days: 31,
        starting_day: 3,
        year: 2019
    }, {
        month_index: 5,
        amount_of_days: 30,
        starting_day: 6,
        year: 2019
    }, {
        month_index: 6,
        amount_of_days: 31,
        starting_day: 1,
        year: 2019
    }, {
        month_index: 7,
        amount_of_days: 31,
        starting_day: 4,
        year: 2019
    }, {
        month_index: 8,
        amount_of_days: 30,
        starting_day: 7,
        year: 2019
    }, {
        month_index: 9,
        amount_of_days: 31,
        starting_day: 2,
        year: 2019
    }, {
        month_index: 10,
        amount_of_days: 30,
        starting_day: 5,
        year: 2019
    }, {
        month_index: 11,
        amount_of_days: 31,
        starting_day: 0,
        year: 2019
    }, {
        month_index: 0,
        amount_of_days: 31,
        starting_day: 4,
        year: 2020
    }, {
        month_index: 1,
        amount_of_days: 28,
        starting_day: 6,
        year: 2020
    }, {
        month_index: 2,
        amount_of_days: 31,
        starting_day: 0,
        year: 2020
    }, {
        month_index: 3,
        amount_of_days: 30,
        starting_day: 3,
        year: 2020
    }, {
        month_index: 4,
        amount_of_days: 31,
        starting_day: 5,
        year: 2020
    }, {
        month_index: 5,
        amount_of_days: 30,
        starting_day: 1,
        year: 2020
    }, {
        month_index: 6,
        amount_of_days: 31,
        starting_day: 3,
        year: 2020
    }, {
        month_index: 7,
        amount_of_days: 31,
        starting_day: 6,
        year: 2020
    }, {
        month_index: 8,
        amount_of_days: 30,
        starting_day: 2,
        year: 2020
    }, {
        month_index: 9,
        amount_of_days: 31,
        starting_day: 4,
        year: 2020
    }, {
        month_index: 10,
        amount_of_days: 30,
        starting_day: 0,
        year: 2020
    }, {
        month_index: 11,
        amount_of_days: 31,
        starting_day: 2,
        year: 2020
    }, {
        month_index: 0,
        amount_of_days: 31,
        starting_day: 5,
        year: 2021
    }
);

var data = {
    current_modal_popup:0,
    calendar: {
        month: "Default",
        year: "Default"
    },
};

var post_its = [
    
    
    
    
];

// for unit tests
module.exports = {
    month_data_array: function() {
        var array = new Array;
        array = month_data;
        return array;
    }
}