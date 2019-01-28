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
sessionStorage.setItem("flag", "true");


