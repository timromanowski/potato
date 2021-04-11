// document ready
$(function() {

    $( document ).mousedown(function(evt) {
       $("#smth").css({top: evt.offsetY, left: evt.offsetX, position:'absolute'});
    });
});