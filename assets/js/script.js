//Set current date at the top of the page.
var today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(today);

//Save text in each text area
function HourClick(id) {
    var lsKey = "Item" + id;
    var message = $("#" + id).val();
    localStorage.setItem(lsKey, message);
}

//Fill text in each text area
function FillBoxes() {
    for (var i = 0; i < 9; i++) {
        var lsKey = "Item" + i;
        $("#" + i).val(localStorage.getItem(lsKey))
    }
}

//Determine whether each block is in the past, present, or future
function PastOrPresent() {
    for (var i = 0; i < 9; i++) {
    var currentHour = moment().hour();
    var itemHour = 9 + i;
        if (itemHour < currentHour) {
            // Show past hour formatting
            $("#" + i).addClass("past");
        }
        else if (itemHour == currentHour) {
            // Show current hour formatting
            $("#" + i).addClass("present");
        }
        else {
            // Show future formatting
            $("#" + i).addClass("future");
        }
    }
}

PastOrPresent();
FillBoxes();