function dayClicked(e){
    sessionStorage.setItem("year", data.calendar.year);
    sessionStorage.setItem("month", data.calendar.month);
    date = e.dataset.uid;

    console.log(jsEvents[0]["date"] == date);
    document.getElementById('date').value = e.dataset.uid;
    console.log(e.dataset.uid);
    var modal = document.getElementById("modal");
    modal.open = true;
    openPostIt();
    // e.targetSrc.data['eventid']
}

function display() {
    
}


function openPostIt(){
    var template = document.getElementById("make-note");
    template.removeAttribute("hidden");


    // var event = null;
    // for(var ev : events)
    // {
    //     if(ev.id == eventId) {
    //         event = ev;
    //         break;
    //     }
    // }

    // if(event) {
    //     document.getElementById('title').value = event.title;
    //     document.getElementById('date').value = event.date;

    // }
}

