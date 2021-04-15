// document ready
$(function() {

    $( document ).mousedown(function(evt) {
       $("#smth").animate({top: evt.offsetY, left: evt.offsetX});
       var colorR = Math.floor((Math.random() * 256));
       var colorG = Math.floor((Math.random() * 256));
       var colorB = Math.floor((Math.random() * 256));
       $("#colorhehe").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });

});