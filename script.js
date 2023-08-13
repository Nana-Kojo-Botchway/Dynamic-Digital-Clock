let section = document.querySelector("section")
let icons = document.querySelector(".icons")

icons.onclick = () => {
    section.classList.toggle("dark")
}

// creating a function and calling it every second

setInterval(() => {

    let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM"; // if hour > 12 then = AM, if < then PM
    hour = hour > 12 ? hour - 12 : hour; // if hour value > 12 then subtract by 12 (for AM and PM change)
    hour = hour == 0 ? hour = 12 : hour; // if hour value = 0 then consider it to be 12

    // add zeros to numbers less than 10
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    console.log(sec)

    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".min_num").innerText = min;
    document.querySelector(".sec_num").innerText = sec;
    document.querySelector(".am_pm").innerText = d;
    
}, 1000); //1s