var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  update();
});

function update() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;
  var time = hours + ":" + minutes + ":" + seconds;

  var day_name = weekdays[now.getDay()];
  var day = now.getDate();
  var month = monthnames[now.getMonth()];
  var year = now.getFullYear();
  var date = day_name + ", " + month + " " + day + ", " + year;
  
  
  document.getElementById('time').innerHTML = time;
  document.getElementById('date').innerHTML = date;

  window.setTimeout(function () { update(); }, 1000);
}
