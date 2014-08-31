//= require js/bootstrap.min
//= require js/smooth-scroll
//= require js/custom
//= require js/bind-polyfill


$(document).ready(function() {
  if(typeof console == 'undefined') {
    this.console = { log: function() { } };
  }
});