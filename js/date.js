function fillInCalendar(){
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
    
    
    for(let i = 0; i < days.length; i++){
        
        for(let j )
        days[i].innerHTML = '<span></span>'

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
}

function updateCurrentDates(){

    const today = new Date();
    // console.log(today);
    let month = today.getMonth();
    let year = today.getFullYear();

    data.calendar.month = month;
    data.calendar.year = year;
}

function updateCurrentDates1(month, year){
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
    monthString = "" + month;
    yearString = "" + year;
    dayString = "" + day;

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



