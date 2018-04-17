var msToSeconds = 1000;
var msToMinutes = msToSeconds * 60;
var msToHours = msToMinutes * 60;
var msToDays = msToHours * 24;

setInterval(getTime, 1000);

function getTime() {
  //Current date/time
  var now = new Date();
  //Graduation date
  var graduation = new Date(2018, 5, 14, 18);

  var difference = graduation - now;

  var days = Math.floor(difference / msToDays);
  var hours = Math.floor((difference % msToDays) / msToHours);
  var minutes = Math.floor((difference % msToHours) / msToMinutes);
  var seconds = Math.floor((difference % msToMinutes) / msToSeconds);

  console.log(days, hours, minutes, seconds);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("countdown").style.display = "block";
}