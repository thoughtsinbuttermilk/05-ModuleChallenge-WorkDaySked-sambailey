function currentTime() {
  // local variables to get (from dayjs) and set today's date (in rendered html)
  var currentDayEl = $('#currentDay');
  var todaysDate = dayjs().format('ddd, MMMM D');
  currentDayEl.text(todaysDate);
}

// call function
currentTime();
// set update interval to 5 seconds
setInterval(currentTime, 5000);

$(".time-block").each(function rowClass() {
  // get current time (from dayjs)
  var getTime = dayjs().hour();
  var timeblockID = +$(this).attr('id');
  // compare getTime to div id hour id
  // apply css styles for present, future and past to render html
  if (getTime === timeblockID) {
    $(this).attr('class', 'row time-block present');
  } else if (getTime < timeblockID) {
    $(this).attr('class', 'row time-block future');
  } else {
    $(this).attr('class', 'row time-block past');
  }
});

$('.time-block').each(function calendarEvents() {
  // get/set ids from/to localStorage
  var calendarHourID = $(this).attr('id');
  var saveCalendarHourID = localStorage.getItem(calendarHourID);
  if (saveCalendarHourID) {
    $(this).children(".description").text(saveCalendarHourID);
  }
});

//document.ready: wait for the page to load, DOM elements available
$(document).ready(function() {
  // temp var to store which calendar event is being edited by user
  var calendarEventItem
  // event listener: click on save button
  $(".saveBtn").on("click", function() {
    // which event is the user editing?
    calendarEventItem = $(this).parent().attr('id');
    // user's description of the event
    var calendarEventText = $(this).siblings('.description').val();
    localStorage.setItem(calendarEventItem, calendarEventText);
  }
)});