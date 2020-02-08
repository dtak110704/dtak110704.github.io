$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Hi Trúc <3',
        text: ' Đây là quà Va lung tung của Khoa dành cho Trúc ',
        imageUrl: 'img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 350,
        background: '#fff url("img/iput-bg.jpg")',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button position
function moveButton() {
    var audio = new Audio('sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// show popup
$('#yes').click(function() {
    var audio = new Audio('sound/tick.mp3');
    audio.play();
    Swal.fire({
                width: 900,
                confirmButtonText: 'Bái baiiiiiii <3',
                background: '#fff url("img/iput-bg.jpg")',
                title: 'Khoa biết Trúc thương Khoa nhất mà <3',
                text: "Giờ thì mau cái đít inbox nói thương tui đi con heo kia, phải tặng quà lại tui đó nghe chưa :3",
                confirmButtonColor: '#83d0c9',
               
            })
        }