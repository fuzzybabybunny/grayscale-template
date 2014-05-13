Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('websites'); }
});

getWebsiteDataById = function() {
  return Websites.findOne(this.params._id);
}

Router.map(function() {

  this.route('layout', {
    path: '/',
    data: getWebsiteDataById
  });

});