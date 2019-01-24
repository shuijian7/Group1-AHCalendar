// function updateCalendarDates() {
// 	var date = new Date();
// 	document.getElementById("cal-year").innerHTML = date.getFullYear();
// 	
// 	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     document.getElementById("cal-month").innerHTML = months[date.getMonth()]

// }
function updateCurrentDates(){
    const today = new Date();
    
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    
    data.current_date.day = day;
    data.current_date.month = month;
    data.current_date.year = year;
    data.current_date.date = date;
    
    data.calendar.month = month;
    data.calendar.year = year;
}

//taken from Stack Overflow https://stackoverflow.com/questions/12757911/how-to-display-current-month-year-in-javascript-using-div
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//taken from Udemy

function updateCalendarDates(){
    
    // data.calendar.month = month;
    // data.calendar.year = year;
    document.getElementById("cal-year").innerHTML = data.calendar.year;
    document.getElementById("cal-month").innerHTML = months[data.calendar.month];
}

