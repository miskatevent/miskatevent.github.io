$(document).ready(function () {
  $('#maiCarousel').find('.carousel-item').first().addClass('active');

  /*particle*/
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  /*back to top*/
  addBackToTop({
      diameter: 56,
      backgroundColor: '#45a5d1',
      textColor: '#fff'
  })
});
