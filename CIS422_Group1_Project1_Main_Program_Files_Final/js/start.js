/* HTML, CSS, and Javascript derived from:
https://udemy.com/2019-calendar-app-lets-build-it
Author Jesse Cain
Will use shorthand notation Derived from JC to represent the above source

*/

// Derived from JC

function start(){
    if(sessionStorage.getItem("flag") != "true") {
        updateCurrentDates();
        updateCalendarDates();
        fillInCalendar();
    }
    else {
        year = parseInt(sessionStorage.getItem("year"))
        month = parseInt(sessionStorage.getItem("month"))
        updateCurrentDates1(month, year);
        updateCalendarDates();
        fillInCalendar();
    }
   
}

start();

//end of reference
sessionStorage.setItem("flag", "true");

