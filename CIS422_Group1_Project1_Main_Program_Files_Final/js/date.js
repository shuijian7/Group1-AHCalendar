/* HTML, CSS, and Javascript derived from:
https://udemy.com/2019-calendar-app-lets-build-it
Author Jesse Cain
Will use shorthand notation Derived from JC to represent the above source

*/

// Derived from JC

//fill in the calendar with the dates
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

//get current date
function updateCurrentDates(){

    const today = new Date();
    let date = today.getDate();
    let day = today.getDay();

    // console.log(today);
    let month = today.getMonth();
    let year = today.getFullYear();

    data.calendar.month = month;
    data.calendar.year = year;
}

//update month and year
function updateCurrentDates1(month, year){
    data.calendar.month = month;
    data.calendar.year = year;
}


//update html id with month and year
function updateCalendarDates(){
    //taken from Stack Overflow https://stackoverflow.com/questions/12757911/how-to-display-current-month-year-in-javascript-using-div
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // data.calendar.month = month;
    // data.calendar.year = year;
    document.getElementById("cal-year").innerHTML = data.calendar.year;
    document.getElementById("cal-month").innerHTML = months[data.calendar.month];
}

//update html id with month and year after page load
function updateCalendarDates1(month, year){
    //taken from Stack Overflow https://stackoverflow.com/questions/12757911/how-to-display-current-month-year-in-javascript-using-div
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // data.calendar.month = month;
    // data.calendar.year = year;
    document.getElementById("cal-month").innerHTML = month;
    document.getElementById("cal-year").innerHTML = year;
}


//add event listeners
function fillPartialMonthData(day, count, monthObject, month){
    day.innerHTML = count;
    uid = getUID(monthObject.month_index, monthObject.year, count);
    day.setAttribute("id", uid);
    day.setAttribute("data-uid", uid);
    day.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        dayClicked(day);
    }, false);

    jsEvents.forEach(function(event){

        if(event["date"]==uid) {

            var node = document.createElement('div');

            var title = document.createElement('span');
            var time = document.createElement('span');
            var btn = document.createElement("img");
            //var btn = new Image();
            btn.src = "img/pencil.png";

            var titleChild = document.createTextNode(event["title"]);
            var newTime = moment(event["start_time"], "HH:mm:ss").format("hh:mm A");
            var timeChild = document.createTextNode(newTime);

            title.appendChild(titleChild);
            time.appendChild(timeChild);

            title.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                display(event);
            }, true);

            time.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                display(event);
                console.log(event);
            }, true);

            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                editOrDelete(event);
            }, true);

            title.setAttribute("id", event["id"]);
            time.setAttribute("id", event["id"]);
            btn.classList.add("btn");

            time.classList.add("time");
            btn.setAttribute("id", event["id"]);
            node.classList.add("hello");
            node.setAttribute("id", ["id"]);
            node.appendChild(title);
            node.appendChild(time);
            node.appendChild(btn);

            day.appendChild(node);
        }
    });
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

//end of reference

//populate the form when the pencil is clicked
function editOrDelete(id) {
    var elem = id['id'];
    var title = id['title'];
    var date = id['date'];


    document.getElementById("date123").innerHTML = elem;
    document.getElementById("date123").value = elem;
    document.getElementById("actualDate").value = date;
    console.log(document.getElementById("actualDate"));

    document.getElementById("title123").value = id['title'];
    document.getElementById("start_time123").value = id['start_time'];
    document.getElementById("end_time123").value = id['end_time'];
    document.getElementById("categories123").value = id['categories'];
    document.getElementById("priority123").value = id['priority'];
    document.getElementById("description123").value = id['description'];

    // Derived from JC
    var modal = document.getElementById("edit");
    modal.open = true;
    modal.background = 'static'
    var template = document.getElementById("make-note1");
    template.removeAttribute("hidden");
    //end of reference
}

//display the events data
function display(event) {
    // Derived from JC
    var modal = document.getElementById("display1");
    modal.open = true;
    var template = document.getElementById("make-note2");
    template.removeAttribute("hidden");
    //end of reference
    document.getElementById("displayTitle").innerHTML = event["title"];
    //Convert start time to AM PM
    var newTime = moment(event["start_time"], "HH:mm:ss").format("hh:mm A");
    document.getElementById("displayStart_Time").innerHTML = newTime;
    //Convert end time to AM PM
    var newEndTime = moment(event["end_time"], "HH:mm:ss").format("hh:mm A");

    document.getElementById("displayEnd_Time").innerHTML = newEndTime;
    document.getElementById("displayDescription").innerHTML = event["description"];
    document.getElementById("displayPriority").innerHTML = event["priority"];
    document.getElementById("displayCategories").innerHTML = event["categories"];
}

