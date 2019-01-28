function fillInCalendar(){
    console.log("day");
    console.log(data.calendar.year);
    updateCalendarDates();
    var monthToFillIn = {};
    var previousMonthIndex;
    month_data.forEach(function(month, i){
        if(month.year == data.calendar.year && month.month_index == data.calendar.month){
            monthToFillIn = month;
            previousMonthIndex = i - 1;
        }
    });
    
    let days = document.getElementsByTagName("td");
    let currentMonthCount = 1;
    let previousMonthCount = month_data[previousMonthIndex].amount_of_days - monthToFillIn.starting_day + 1;
    let nextMonthCount = 1;
    
    cleanCells();
    for(let i = 0; i < days.length; i++){
        
        // Filling current month.
        if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
            fillPartialMonthData(days[i], currentMonthCount, monthToFillIn, "current");
            currentMonthCount++;
            
        // Filling previous month.
        } else if(currentMonthCount <= monthToFillIn.amount_of_days){
            fillPartialMonthData(days[i], previousMonthCount, month_data[previousMonthIndex], "previous");
            previousMonthCount++;
            
        // Filling next month.
        } else {
            fillPartialMonthData(days[i], nextMonthCount, month_data[previousMonthIndex + 2], "next");
            nextMonthCount++;
        }
    }
    // changeColor();
}

function fillInCalendar1() {
    console.log(data.calendar.year);
    console.log(data.calendar.month);
    updateCalendarDates1(data.calendar.month, data.calendar.year);
    var monthToFillIn = {};
    var previousMonthIndex;
    month_data.forEach(function(month, i){
        if(month.year == data.calendar.year && month.month_index == data.calendar.month){
            monthToFillIn = month;
            previousMonthIndex = i - 1;
        }
    });
    
    let days = document.getElementsByTagName("td");
    let currentMonthCount = 1;
    let previousMonthCount = month_data[previousMonthIndex].amount_of_days - monthToFillIn.starting_day + 1;
    let nextMonthCount = 1;
    
    cleanCells();
    for(let i = 0; i < days.length; i++){
        
        // Filling current month.
        if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
            fillPartialMonthData(days[i], currentMonthCount, monthToFillIn, "current");
            currentMonthCount++;
            
        // Filling previous month.
        } else if(currentMonthCount <= monthToFillIn.amount_of_days){
            fillPartialMonthData(days[i], previousMonthCount, month_data[previousMonthIndex], "previous");
            previousMonthCount++;
            
        // Filling next month.
        } else {
            fillPartialMonthData(days[i], nextMonthCount, month_data[previousMonthIndex + 2], "next");
            nextMonthCount++;
        }
    }
    // changeColor();
}


function updateCurrentDates(){

    const today = new Date();
    console.log(today);
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    
    data.current_date.day = day;
    // console.log(day);
    data.current_date.month = month;
    data.current_date.year = year;
    data.current_date.date = date;
    
    data.calendar.month = month;
    data.calendar.year = year;
}

function updateCurrentDates1(month, year){
    console.log("hello");
    console.log(month);
    console.log(year);
    data.calendar.month = month;
    data.calendar.year = year;
}



//taken from Udemy

function updateCalendarDates(){
    //taken from Stack Overflow https://stackoverflow.com/questions/12757911/how-to-display-current-month-year-in-javascript-using-div
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // data.calendar.month = month;
    // data.calendar.year = year;
    document.getElementById("cal-year").innerHTML = data.calendar.year;
    document.getElementById("cal-month").innerHTML = months[data.calendar.month];
}

function updateCalendarDates1(month, year){
    //taken from Stack Overflow https://stackoverflow.com/questions/12757911/how-to-display-current-month-year-in-javascript-using-div
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // data.calendar.month = month;
    // data.calendar.year = year;
    document.getElementById("cal-month").innerHTML = month;
    document.getElementById("cal-year").innerHTML = year;
}



function fillPartialMonthData(day, count, monthObject, month){
    day.innerHTML = count;
    uid = getUID(monthObject.month_index, monthObject.year, count);
    day.setAttribute("data-uid", uid);
    appendSpriteToCellAndTooltip(uid, day);
}




// Thus function generates a unique id based on a month, year and day.
function getUID(month, year, day){
    if(month == 12){
        month = 0;
        year++;
    }
    monthString = month.toString();
    yearString = year.toString();
    dayString = day.toString();

    if(day <= 9) {
        dayString = "0" + dayString;
    }

    if(month <= 9) {
        monthString = "0" + monthString;
    }

    return yearString + "-" + monthString + "-" + dayString;
}



function appendSpriteToCellAndTooltip(uid, elem){
    for(let i = 0; i < post_its.length; i++){
        if(uid == post_its[i].id){
            elem.innerHTML += `<img src='images/note${post_its[i].note_num}.png' alt='A post-it note'>`;
            elem.classList.add("tooltip");
            elem.innerHTML += `<span>${post_its[i].note}</span>`;
        }
    }
}



// This function is used to determine whether the calendar month is also the current month.
// It's needed to know if the program should set a #current-day when running fillInCalendar()
function calenderMonthIsCurrentMonth(){
    if(data.current_date.year == data.calendar.year && data.current_date.month == data.calendar.month){
        return true;
    } else {
        return false;
    }
}



// This function is used to remove all unnecessary cell attributes. IE: color, prev-month-last-day.
function cleanCells(){
    removeCurrentDayId();
    var tableCells = document.getElementsByTagName("td");
    for(let i = 0; i < tableCells.length; i++){
        removeClass(tableCells[i], "color");
        removeClass(tableCells[i], "prev-month-last-day");
        removeClass(tableCells[i], "tooltip");
        removeAttribute(tableCells[i], "style");
    }
}



// When the calendar is updated the current-day id will persist. This code removes it.  Is called in cleanCell()
function removeCurrentDayId(){
    if(document.getElementById("current-day")){
        document.getElementById("current-day").removeAttribute("id", "");
    }
}


// This function takes the calender data and increases the month by 1.
function nextMonth(){
    if(data.calendar.month != 11 || data.calendar.year == 2018 || data.calendar.year == 2019){
        data.calendar.month++;
    }
    if(data.calendar.month >= 12){
        data.calendar.month = 0;
        data.calendar.year++;
    }
    sessionStorage.setItem("year", data.calendar.year);
    sessionStorage.setItem("month", data.calendar.month);
    fillInCalendar();
}

// This function takes the calendar data and decreases the month by 1.
function previousMonth(){
    // if(data.calendar.month != 11 || data.calendar.year == 2019){
        if(data.calendar.month == 0 && data.calendar.year == 2018) {
            return;
        }
    data.calendar.month--;
    // }
    if(data.calendar.month <= -1){
        data.calendar.month = 11;
        data.calendar.year--;
    }
    sessionStorage.setItem("year", data.calendar.year);
    sessionStorage.setItem("month", data.calendar.month);
    fillInCalendar();
}

// // This functions fills in all the calendar data.  It is called when the program starts and when the month is changed.
// function fillInCalendar(){
//     updateCalendarDates();
//     var monthToFillIn = {};
//     var previousMonthIndex;
//     month_data.forEach(function(month, i){
//         if(month.year == data.calendar.year && month.month_index == data.calendar.month){
//             monthToFillIn = month;
//             previousMonthIndex = i - 1;
//         }
//     });
    
//     let days = document.getElementsByTagName("td");
//     let currentMonthCount = 1;
//     let previousMonthCount = month_data[previousMonthIndex].amount_of_days - monthToFillIn.starting_day + 1;
//     let nextMonthCount = 1;
    
//     cleanCells();
//     for(let i = 0; i < days.length; i++){
        
//         // Filling current month.
//         if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
//             fillPartialMonthData(days[i], currentMonthCount, monthToFillIn, "current");
//             currentMonthCount++;
            
//         // Filling previous month.
//         } else if(currentMonthCount <= monthToFillIn.amount_of_days){
//             fillPartialMonthData(days[i], previousMonthCount, month_data[previousMonthIndex], "previous");
//             previousMonthCount++;
            
//         // Filling next month.
//         } else {
//             fillPartialMonthData(days[i], nextMonthCount, month_data[previousMonthIndex + 2], "next");
//             nextMonthCount++;
//         }
//     }
//     // changeColor();
// }

// // This functions fills in all the calender data.  It is called when the program starts and when the month is changed.

// // function fillInCalendar(){
// //     updateCalendarDates();
// //     var monthToFillIn = {};
// //     var previous_month_index;
// //     month_data.forEach(function(month, i){
// //         console.log(month.year);
// //         console.log(data.calendar.year);
// //         console.log(month.month_index);
// //         console.log(data.calendar.month);
// //         if(month.year == data.calendar.year && month.month_index == data.calendar.month){
// //             monthToFillIn = month;
// //             previous_month_index = i - 1;
// //         }
// //     });
    
// //     let days = document.getElementsByTagName("td");
// //     let currentMonthCount = 1;
// //     let previousMonthCount = month_data[previous_month_index].amount_of_days - monthToFillIn.starting_day + 1;
// //     let nextMonthCount = 1;
    
// //     cleanCells(days);
// //     for(let i = 0; i < days.length; i++){
        
// //         // Filling current month.
// //         if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
// //             days[i].innerHTML = currentMonthCount;
// //             if(currentMonthCount == data.current_date.date && calenderMonthIsCurrentMonth()){
// //                 days[i].setAttribute("id", "current-day");
// //             }
            
// //             currentMonthCount++;
            
// //         // Filling previous month.
// //         } else if(currentMonthCount <= monthToFillIn.amount_of_days){
// //             // days[i].classList.add("color");
// //             days[i].innerHTML = previousMonthCount;
// //             if(previousMonthCount == month_data[previous_month_index].amount_of_days){
// //                 days[i].classList.add("prev-month-last-day");
// //             }
// //             previousMonthCount++;
            
// //         // Filling next month.
// //         } else {
// //             // days[i].classList.add("color");
// //             days[i].innerHTML = nextMonthCount;
// //             nextMonthCount++;
// //         }
// //     }
// //     // changeColor();
// // }

// function fillPartialMonthData(day, count, monthObject, month){
//     day.innerHTML = count;
//     if(month == "current"){
//         if(count == data.current_date.date && calenderMonthIsCurrentMonth()){
//             day.setAttribute("id", "current-day");
//         }
//     } else {
//         day.classList.add("color");
//         if(month == "previous" && count == monthObject.amount_of_days){
//             day.classList.add("prev-month-last-day");
//         }
//     }
    
//     uid = getUID(monthObject.month_index, monthObject.year, count);
//     day.setAttribute("data-uid", uid);
//     appendSpriteToCellAndTooltip(uid, day);
// }




// // Thus function generates a unique id based on a month, year and day.
// function getUID(month, year, day){
//     if(month == 12){
//         month = 0;
//         year++;
//     }
//     return month.toString() + year.toString() + day.toString();
// }



// // This function is used to determine whether the calender month is also the current month.
// // It's needed to know if the program should set a #current-day when running fillInCalender()
// function calenderMonthIsCurrentMonth(){
//     if(data.current_date.year == data.calendar.year && data.current_date.month == data.calendar.month){
//         return true;
//     } else {
//         return false;
//     }
// }


// // This function is used to remove all unnecessary cell attributes. IE: color, prev-month-last-day.
// // function cleanCells(cells){
// //     removeCurrentDayId();
// //     for(let i = 0; i < cells.length; i++){
// //         if(cells[i].classList.contains("color")){
// //             cells[i].classList.remove("color");
// //         }
        
// //         if(cells[i].classList.contains("prev-month-last-day")){
// //             cells[i].classList.remove("prev-month-last-day");
// //         }
// //     }
// // }
// // This function is used to remove all unnecessary cell attributes. IE: color, prev-month-last-day.
// function cleanCells(){
//     removeCurrentDayId();
//     var tableCells = document.getElementsByTagName("td");
//     for(let i = 0; i < tableCells.length; i++){
//         removeClass(tableCells[i], "color");
//         removeClass(tableCells[i], "prev-month-last-day");
//         removeClass(tableCells[i], "tooltip");
//         removeAttribute(tableCells[i], "style");
//     }
// }



// // When the calender is updated the current-day id will persist. This code removes it.  Is called in cleanCell()
// function removeCurrentDayId(){
//     if(document.getElementById("current-day")){
//         document.getElementById("current-day").removeAttribute("id", "");
//     }
// }


// // This function takes the calender data and increases the month by 1.
// function nextMonth(){
//     if(data.calendar.month != 11 || data.calendar.year == 2018 || data.calendar.year == 2019){
//         data.calendar.month++;
//     }
//     if(data.calendar.month >= 12){
//         data.calendar.month = 0;
//         data.calendar.year++;
//     }
//     fillInCalendar();
// }

// // This function takes the calendar data and decreases the month by 1.
// function previousMonth(){
//     // if(data.calendar.month != 11 || data.calendar.year == 2019){
//         if(data.calendar.month == 0 && data.calendar.year == 2018) {
//             return;
//         }
//     data.calendar.month--;
//     // }
//     if(data.calendar.month <= -1){
//         data.calendar.month = 11;
//         data.calendar.year--;
//     }
//     fillInCalendar();
// }



// // This triggers the nextMonth() and previousMonth() with arrow keys.
// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37: previousMonth(); break;
//         case 39: nextMonth(); break;
//     }
// };

// This functions fills in all the calendar data.  It is called when the program starts and when the month is changed.



// // This function takes the calendar data and increases the month by 1.
// function nextMonth(){
//     if(data.calendar.month != 11 || data.calendar.year == 2018){
//         data.calendar.month++;
//     }
//     if(data.calendar.month >= 12){
//         data.calendar.month = 0;
//         data.calendar.year++;
//     }
//     fillInCalendar();
// }



// // This function takes the calendar data and decreases the month by 1.
// function previousMonth(){
//     if(data.calendar.month != 11 || data.calendar.year == 2019){
//         data.calendar.month--;
//     }
//     if(data.calendar.month <= -1){
//         data.calendar.month = 11;
//         data.calendar.year--;
//     }
//     fillInCalendar();
// }



// This triggers the nextMonth() and previousMonth() with arrow keys.
// document.onkeydown = function(e) {
//     switch (e.keyCode) {
//         case 37: previousMonth(); break;
//         case 39: nextMonth(); break;
//     }
// };




