
const myDate = new Date();
console.log(myDate);

//test true/false
const isTestingDate = false;
let weekDay;
let hours;

if (isTestingDate === true) {
    weekDay = prompt("enter test date here:");
    hours = prompt("enter test hour here:");
}
else {
    weekDay = myDate.getDay();
    hours = myDate.getHours();
}

//time
const minutes = myDate.getMinutes();
const secondes = myDate.getSeconds();
console.log("Time:" + " " + hours + "h" + minutes + "m" + secondes + "s");

//week Mon - Fri

if (weekDay >= 1 && weekDay <= 5) {
    console.log("Week Day now:" + " " + weekDay);
}
//weekend Sat & Sun
if (weekDay == 0 || weekDay == 6) {
    console.log("Jour weekend:" + " " + weekDay);
}
//hour weekend Friday
if (weekDay === 5 && hours > 17) {
    console.log("WEEKEND FRI:" + " " + weekDay);
}
//hour weekend Monday
if (weekDay === 1 && hours < 9) {
    console.log("WEEKEND MON:" + " " + weekDay);
}












