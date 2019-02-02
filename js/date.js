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
    day.setAttribute("id", uid);
    day.setAttribute("data-uid", uid);
    day.addEventListener('click', function(e) {
        e.stopPropagation();
        dayClicked(day);
    }, false);

    jsEvents.forEach(function(event){

        if(event["date"]==uid) {

            var node = document.createElement('div');

            var title = document.createElement('span');
            var time = document.createElement('span');
            //var image = document.createElement('img');
            var btn = document.createElement("BUTTON");

            var titleChild = document.createTextNode(event["title"]);
            var timeChild = document.createTextNode(event["start_time"]);


            //image.classList.add("fas");
            //image.classList.add("fa-edit");

            title.appendChild(titleChild);
            time.appendChild(timeChild);

            title.addEventListener('click', function(e) {
                e.stopPropagation();
                display(event);
            }, true);

            time.addEventListener('click', function(e) {
                e.stopPropagation();
                display(event);
                console.log(event);
            }, true);

            btn.addEventListener('click', function(e) {
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


function editOrDelete(id) {
    // console.log("hello");
    // console.log(id);
    var elem = id['id'];
    var title = id['title'];

    console.log("here");
    console.log(document.getElementById("date123"));


    var modal = document.getElementById("edit");
    modal.open = true;
    var template = document.getElementById("make-note1");
    template.removeAttribute("hidden");
    document.getElementById("date123").innerHTML = elem;
    document.getElementById("date123").value = elem;



    console.log(elem);
}


function display(event) {
    var modal = document.getElementById("display1");
    modal.open = true;
    var template = document.getElementById("make-note2");
    template.removeAttribute("hidden");
        document.getElementById("displayTitle").innerHTML = event["title"];
        document.getElementById("displayStart_Time").innerHTML = event["start_time"];
        document.getElementById("displayEnd_Time").innerHTML = event["end_time"];
        document.getElementById("displayDescription").innerHTML = event["description"];
        document.getElementById("displayPriority").innerHTML = event["priority"];
        document.getElementById("displayCategories").innerHTML = event["categories"];
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


//for unit tests
module.exports = { 
    getUID: getUID,
    previousMonth: previousMonth,
    fillPartialMonthData: fillPartialMonthData,
    nextMonth: nextMonth,
    updateCurrentDates: updateCurrentDates,
    click: click,
    appendSpriteToCellAndTooltip: appendSpriteToCellAndTooltip,
    nextMonth: nextMonth,
    previousMonth: previousMonth
};
