var buttonEl = document.querySelector("#submit-btn");

var reservationObj = {
  arrival: null,
  depart: null,
  guest: 0,
  room: null,
};

// Date selector
$(function () {
  var minDate = new Date();
  // Arrival Date Selector
  $("#arrivalPicker").datepicker({
    showAnim: "bounce", // sets bounce animation
    minDate: minDate, // limits selectable dates to present/future
  });
  $("#arrivalPicker").on("change", function () {
    reservationObj.arrival = $(this).val(); //returns the value to the obj
  });
  // Departure Date Selector
  $("#departPicker").datepicker({
    showAnim: "bounce", // sets bounce animation
    minDate: minDate, // limits selectable dates to present/future
  });
  $("#departPicker").on("change", function () {
    reservationObj.depart = $(this).val(); //returns the value to the obj
  });
});

// Guest Head Count
$(function () {
  var spinner = $("#spinner").spinner({
    max: 3,
    min: 1,
  });
  $("#spinner").on("spinchange", function (event, ui) {
    reservationObj.guest = spinner.spinner("value"); //returns the value to the obj
  });
});

// Room type selector
$("#roomType").on("change", function () {
  reservationObj.room = $("#roomType").val(); //returns the value to the obj
});

// Trigger the Submit button to store the options selected in Local Storage
buttonEl.addEventListener("click", () => {
  if (
    reservationObj.arrival === null ||
    reservationObj.depart === null ||
    reservationObj.guest === 0 ||
    reservationObj.room === null
  ) {
    alert("All fields are required.");
  } else {
    // Open confirmation modal
    $("#reserve-modal").show();
    localStorage.setItem("reservationObj", JSON.stringify(reservationObj));

    // Retrieve the object from storage and Log it
    var retrievedObject = localStorage.getItem("reservationObj");
    console.log("retrievedObject: ", JSON.parse(retrievedObject));
  }
});
// Closes the modal by clicking the "X" button
$(".close-button").click(function () {
  $("#reserve-modal").hide();
});
