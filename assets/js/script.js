var arrivalInput = $("input[name='arrival']").value;
var departureInput = $("input[name='departure']").value;
var guestCountInput = $("select[name='value']").value;
var roomTypeInput = $("select[name='room-type']").value;
var buttonEl = $("#submit-btn");

// Date selector
$( function() {
  var minDate = new Date();
    $( ".datepicker" ).datepicker({
      showAnim: 'bounce',
      minDate: minDate
    });
  } );

// Guest Head Count
$( function() {
  var spinner = $( "#spinner" ).spinner();
} );


buttonEl.addEventListener('click', () => {
    localStorage.setItem('Arrival Date', arrivalInput);
    localStorage.setItem('Departure Date', departureInput);
    console.log(arrivalInput);
});
  