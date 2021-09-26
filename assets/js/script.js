//Set current date at the top of the page.
var today = moment().format('dddd, MMMM Do YYYY');
currentDate = document.getElementById("currentDay");
currentDate.innerHTML = today;

//Save text in each text area