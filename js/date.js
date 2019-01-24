// This functions fills in all the calender data.  It is called when the program starts and when the month is changed.

function fillInCalendar(){
    updateCalendarDates();
    var monthToFillIn = {};
    var previous_month_index;
    month_data.forEach(function(month, i){
        console.log(month.year);
        console.log(data.calendar.year);
        console.log(month.month_index);
        console.log(data.calendar.month);
        if(month.year == data.calendar.year && month.month_index == data.calendar.month){
            monthToFillIn = month;
            previous_month_index = i - 1;
        }
    });
    
    let days = document.getElementsByTagName("td");
    let currentMonthCount = 1;
    let previousMonthCount = month_data[previous_month_index].amount_of_days - monthToFillIn.starting_day + 1;
    let nextMonthCount = 1;
    
    cleanCells(days);
    for(let i = 0; i < days.length; i++){
        
        // Filling current month.
        if(monthToFillIn.starting_day <= i && currentMonthCount <= monthToFillIn.amount_of_days){
            days[i].innerHTML = currentMonthCount;
            if(currentMonthCount == data.current_date.date && calenderMonthIsCurrentMonth()){
                days[i].setAttribute("id", "current-day");
            }
            
            currentMonthCount++;
            
        // Filling previous month.
        } else if(currentMonthCount <= monthToFillIn.amount_of_days){
            // days[i].classList.add("color");
            days[i].innerHTML = previousMonthCount;
            if(previousMonthCount == month_data[previous_month_index].amount_of_days){
                days[i].classList.add("prev-month-last-day");
            }
            previousMonthCount++;
            
        // Filling next month.
        } else {
            // days[i].classList.add("color");
            days[i].innerHTML = nextMonthCount;
            nextMonthCount++;
        }
    }
    // changeColor();
}



// This function is used to determine whether the calender month is also the current month.
// It's needed to know if the program should set a #current-day when running fillInCalender()
function calenderMonthIsCurrentMonth(){
    if(data.current_date.year == data.calendar.year && data.current_date.month == data.calendar.month){
        return true;
    } else {
        return false;
    }
}


// This function is used to remove all unnecessary cell attributes. IE: color, prev-month-last-day.
function cleanCells(cells){
    removeCurrentDayId();
    for(let i = 0; i < cells.length; i++){
        if(cells[i].classList.contains("color")){
            cells[i].classList.remove("color");
        }
        
        if(cells[i].classList.contains("prev-month-last-day")){
            cells[i].classList.remove("prev-month-last-day");
        }
    }
}


// When the calender is updated the current-day id will persist. This code removes it.  Is called in cleanCell()
function removeCurrentDayId(){
    if(document.getElementById("current-day")){
        document.getElementById("current-day").removeAttribute("id", "");
    }
}


// This function takes the calender data and increases the month by 1.
function nextMonth(){
    if(data.calendar.month != 11 || data.calendar.year == 2018){
        data.calendar.month++;
    }
    if(data.calendar.month >= 12){
        data.calendar.month = 0;
        data.calendar.year++;
    }
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
    fillInCalendar();
}



// This triggers the nextMonth() and previousMonth() with arrow keys.
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: previousMonth(); break;
        case 39: nextMonth(); break;
    }
};





