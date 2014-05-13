// Meteor.startup( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

// Template.layout.rendered( function () {
//   $.getScript("assets/js/jquery.min.js");
//   $.getScript("assets/js/bootstrap.min.js");
//   $.getScript("assets/js/isotope.pkgd.min.js");
//   $.getScript("assets/js/imagesloaded.min.js");
//   $.getScript("assets/js/jquery.scrollTo.min.js");
//   $.getScript("assets/js/jquery.nav.min.js");
//   $.getScript("assets/js/jquery.appear.min.js");
//   $.getScript("assets/js/twitterFetcher.min.js");
//   $.getScript("assets/js/script.js");
// });

Template.layout.created = function() {
  $('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>');
  $('head').append('<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>');
  $('head').append('<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>');
  // $('head').append('<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>');

  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false', function() {
    $('head').append('<script src="assets/js/grayscale.js"></script>');
  })
}