// document ready
$(function() {


    var score = 0;
    var isFirstClick = true;

    $(document).mousedown(function (evt) {
        if (isFirstClick) {
           $('.outerWindow').hide();
           $('#colorhehe').show();
           $('.scorebox').show();
         isFirstClick = false;
        } else {
        score = score + 1;
           $('#score').text(score)
           $("#smth").animate({top: evt.offsetY, left: evt.offsetX});
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            $("#colorhehe").css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
            var colorR = Math.floor((Math.random() * 356));
            var colorG = Math.floor((Math.random() * 356));
            var colorB = Math.floor((Math.random() * 356));
            $("#score").css("color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
        }
    });

   let moveBy = 10;

    $(document).keydown(function (evt) {
        var potato =  document.querySelector('#smth');
        switch (evt.key) {
            case 'ArrowLeft' :
                potato.style.left = parseInt(potato.style.left) - moveBy + 'px';
                break;
            case 'ArrowRight' :
                potato.style.left = parseInt(potato.style.left) + moveBy + 'px';
                break;
            case 'ArrowUp' :
                potato.style.top = parseInt(potato.style.top) - moveBy + 'px';
                break;
            case 'ArrowDown' :
                potato.style.top = parseInt(potato.style.top) + moveBy + 'px';
                break;
        } 
    });
});

