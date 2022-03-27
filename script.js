
var today = moment();
$("#currentDay").text(today.format('dddd, MMM Do YYYY'));

$(document).ready(function() {

  function coloring() {
    var currentTime = moment().hour();

    $(".time-block").each(function() {
      var rowTime = parseInt($(this).attr("id").split("hour-")[1]);
      console.log(rowTime);

      if (rowTime < currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (rowTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  $(".saveBtn").on("click", function() {
    var content = $(this).siblings(".description").val();
    var targetHour = $(this).parent().attr("id");

    localStorage.setItem(targetHour, content);
  })

  coloring();
})