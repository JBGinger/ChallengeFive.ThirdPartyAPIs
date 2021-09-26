var today = new Date();
var dayOfWeek = new Date().toLocaleDateString('en', {weekday:'long'});
console.log(dayOfWeek);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dayOfWeek + ', ' + mm + '/' + dd + '/' + yyyy;

currentDate = document.getElementById("currentDay");
currentDate.innerHTML = today;