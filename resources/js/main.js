$(document).ready(function() {
  $('.btn-burger').click(function() {
    $('.nav-main__list').toggle(1000);
    $('.btn-burger').toggleClass('turn');
  })
});