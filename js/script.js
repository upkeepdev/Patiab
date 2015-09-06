(function($) {
	"use strict"; 
    $(function() {		
		$.backstretch('img/bg.jpg');
	}); 
}(jQuery));
$(document).ready(function() {
    $('#i1').mouseenter(function(e) {
        $('#view1').fadeIn(500);
    }).mouseleave(function(e) {
        $('#view1').fadeOut(500);
    });
    $('#i2').mouseenter(function(e) {
        $('#view2').fadeIn(500);
    }).mouseleave(function(e) {
        $('#view2').fadeOut(500);
    });
    $('#i3').mouseenter(function(e) {
        $('#view3').fadeIn(500);
    }).mouseleave(function(e) {
        $('#view3').fadeOut(500);
    });
});	
