function start(){
    // if(sessionStorage.getItem("flag") != "true") {
    //     updateCurrentDates();
    //     updateCalendarDates();
    //     fillInCalendar();
    // }
    // else {
    //     year = parseInt(sessionStorage.getItem("year"))
    //     month = parseInt(sessionStorage.getItem("month"))
    //     updateCurrentDates1(month, year);
    //     updateCalendarDates();
    //     fillInCalendar();
    // }

    updateCurrentDates();
    updateCalendarDates();
    fillInCalendar();
    //bindListener();

    // console.log("HELLLLLLOOOO");
    // console.log(jsEvents[0]["id"]);
   
    
}

// function bindListener() {


//     for(var i = 0; i < jsEvents.length; i++) {
//         // console.log("hello");
//         var elem = document.getElementById(jsEvents[i]['id']);
//         jsEvents[i]['id'].addEventListener('mouseover', hello);
//     }
// }

// function hello() {
//     alert("hello");
// }

start();
// sessionStorage.setItem("flag", "true");

