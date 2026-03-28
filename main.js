
function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;

    let day = now.toLocaleDateString("en-US", { weekday: "long" });
    let year = now.getFullYear();
    let date = now.getDate();
    let month = now.toLocaleDateString("en-Us", { month: "short"});

    // Add leading zero
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;



    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
    document.getElementById("day").innerHTML = day;
    document.getElementById("year").innerHTML = year;
    document.getElementById("ampm").innerHTML = ampm;
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
}

setInterval(updateClock, 1000);


updateClock();