$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
      pause: true,
      interval: 4000,
    });
  });

  // simply preloader
$('.tumb > img').each(function() {
  $(this).css({
    opacity: 0
  }).load(function() {
    $(this).animate({
      opacity: 1
    }, 1000);
  }).attr('src', $(this).data('src'))
  // wait and remove data-src
  .delay(100)
  .attr('data-src','');
});