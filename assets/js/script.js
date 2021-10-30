// var arrivalInput = document.querySelector("input[name='arrival']").textContent;
var reservationObj = {
  arrival: 'dd/mm/yyyy',
  depart: 'dd/mm/yyyy',
  guest: guestCountInput,
  roomType: roomTypeInput
};
var buttonEl = document.querySelector("#submit-btn");
var guestCountInput = document.querySelector("#spinner").value;
var roomTypeInput = document.querySelector("#room").value;


// Date selector
$( function() {
  var minDate = new Date();
    $( '#arrivalPicker' ).datepicker({
      showAnim: 'bounce',
      minDate: minDate
    });
    $('#arrivalPicker').on("change",function(){
      reservationObj.arrival = $(this).val();
      console.log(reservationObj);
    });

    $( '#departPicker' ).datepicker({
      showAnim: 'bounce',
      minDate: minDate
    });
    $('#departPicker').on("change",function(){
      reservationObj.depart = $(this).val();
      console.log(reservationObj);
    });
    console.log(reservationObj);
} );

// Guest Head Count
$( function() {
  var spinner = $( "#spinner" ).spinner();
  reservationObj.guest = $(this).val();
} );

console.log(reservationObj);
buttonEl.addEventListener('click', () => {
    // localStorage.setItem(JSON.stringify(reservationObj));
    console.log(reservationObj);
    $( '#arrivalPicker' ).datepicker() = '';
    $( '#departPicker' ).datepicker() = '';
    guestCountInput = '';
    roomTypeInput = '';
});
  