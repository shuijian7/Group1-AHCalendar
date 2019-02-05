/* HTML, CSS, and Javascript derived from:
https://udemy.com/2019-calendar-app-lets-build-it
Author Jesse Cain
Will use shorthand notation Derived from JC to represent the above source

*/

// Derived from JC

//find the day clicked and populate the add form
function dayClicked(e){
    // sessionStorage.setItem("flag", "true");
    sessionStorage.setItem("year", data.calendar.year);
    sessionStorage.setItem("month", data.calendar.month);
    date = e.dataset.uid;
    document.getElementById('date').value = e.dataset.uid;
    var modal = document.getElementById("modal");
    modal.open = true;
    openPostIt();
}



//open the add form 
function openPostIt(){
    var template = document.getElementById("make-note");
    template.removeAttribute("hidden");
}

//end of reference
