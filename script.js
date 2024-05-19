let endDate = "19 March 2024 8:00 PM"

let inputs = document.querySelectorAll("input");

function clock(){
    let now = new Date();
    let end = new Date(endDate);
    document.getElementsByTagName("h1")[1].innerHTML = endDate
    // console.log(now)
    // console.log(end)
    let diff = (end - now)/1000;
    // console.log(diff);
    if(diff < 0) return;

    let days = Math.floor(diff/(24*60*60));
    inputs[0].value = days;
    let hours = Math.floor(diff/(60*60))%24;
    inputs[1].value = hours;
    let minutes = Math.floor(diff/60%60);
    inputs[2].value = minutes;
    let seconds = Math.floor(diff)%60;
    inputs[3].value = seconds;
}

setInterval(clock , 1000);