$(document).ready(function() {
$('[data-toggle="collapse"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).text("Hide");
  } else {
    $(this).text("Click for more info");
  }
});
// document ready
});
