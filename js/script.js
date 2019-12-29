window.addEventListener('mousemove', cursor);
var $win = $(window);
var $cursor = $('#cursor');
var $width = $(window).width();

function everyTick() {
    cursor();
    setTimeout(arguments.callee, 0);
}

function getX(event) //left position
{
    if(!event.pageX)
    {
        return event.clientX;
    }
    else
    {
        return event.pageX - (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
}

function getY(event) //top position
{
    if(event.pageY)
    {
        return event.pageY - (document.body.scrollTop || document.documentElement.scrollTop);
    }
    else
    {
        return event.clientY;
    }
}
function getScroll()
{
}

var offset = 200;


function cursor() {
    $cursor.css("top", getY(event) - 8 + "px");
    $cursor.css("left", getX(event) - 8 + "px");
    var i = 0;
    if ($('#images').is(":hover")) {
        $('*').css("cursor", "none");
        if (getX(event) > $width / 2) {
            $cursor.attr("src", "img/ui/arrowRight.svg");
            $('#images').click(function() {
                i = 1;
                $('#images').css("background-image", "url('../img/lander" + i + ".jpg')");
                console.log(i);
            });
        } else {
            $cursor.attr("src", "img/ui/arrowLeft.svg");
            $('#images').click(function() {
                i = 0;
                $('#images').css("background-image", "url('../img/lander" + i + ".jpg')");
                console.log(i);
            });
        }
    } else {
        $cursor.attr("src", "");
        $('*').css("cursor", "auto");
    }
}

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#header').css("background", "#e3e3e3");
        $('#logo').css("color", "#222222");
        $('#link').css("color", "#222222");
    } else {
        $('#header').css("background", "none");
        $('#logo').css("color", "#e3e3e3");
        $('#link').css("color", "#e3e3e3");
    }
}