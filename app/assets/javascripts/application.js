// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require jquery.easy-autocomplete
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require lookup.js
//= require sweetalert2
//= require sweet-alert2-rails
//= require_tree .

// Add style to search bar (easyAutocomplete)

$(document).on('turbolinks:load', function() {
	document.querySelector('#q').classList.add("lookup-input")
	document.querySelector('#q').parentNode.classList.add("lookup-input")
})

// Google Places autocomplete (Search Bar)
var autocomplete;

function initAutocomplete() {
	// Create the autocomplete object
	autocomplete = new google.maps.places.Autocomplete(
	    /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
	    {types: ['geocode']});
	autocomplete.addListener('place_changed',  function() {
	// var place = autocomplete.getPlace();
  });
}
