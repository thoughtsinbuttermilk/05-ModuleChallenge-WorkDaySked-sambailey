// Requirements from challenge README.md

// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// DONE: THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm

// WHEN I view the timeblocks for that day
// DONE: THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add code to display the current date in the header of the page.
  // Display the current date in the header of the page.
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

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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

  $(function () {

}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
);
