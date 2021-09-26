//Set current date at the top of the page.
var today = moment().format('dddd, MMMM Do YYYY');
currentDate = document.getElementById("currentDay");
currentDate.innerHTML = today;

//Save text in each text area
function HourClick(id) {
    var lsKey = "Item" + id;
    var message = $("#Text" + id).val();
    localStorage.setItem(lsKey, message);
}

//Fill text in each text area
function FillBoxes() {
    currentHour = moment().hour();
    for (var i = 0; i < 9; i++) {
        var lsKey = "Item" + i;
        $("#Text" + i).val(localStorage.getItem(lsKey))
        //Determine whether each block is in the past, present, or future
        var itemHour = 9 + i;
        if (itemHour < currentHour) {
            // Show past hour formatting
            $(item).addClass("past");
        }
        else if (itemHour == currentHour) {
            // Show current hour formatting
            $(item).addClass("present");
        }
        else {
            //// Show future formatting
            $(item).addClass("future");
        }
    }
}
FillBoxes();