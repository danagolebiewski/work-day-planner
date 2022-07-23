// Using moment.js to display current day and time 
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY h:mm:ss a"));

$("saveBtn").on("click", function () {
console.log(this);
var text = $(this).siblings("description").val();
var time = $(this).parent().attr("id");

// adding items to local storage
localStorage.setItem(time,text); 
})

// load saved data from local storage 
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));


function hourTracker() {
  var currentHour = moment().hour(); 

  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentHour)
  

  // use these if/else statements to change the color of the hour blocks
  if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } 
  else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("future");
     $(this).removeClass("present");
  } 
  else {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
})
}
// Run the function
hourTracker();
