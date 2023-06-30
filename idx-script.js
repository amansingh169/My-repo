

function show(anything){
    document.querySelector('.options').value = anything;
}

function show(anything) {
    document.querySelector('.dropdown').value = anything;
}

// let drop = document.querySelector('.dropdown');
// drop.onclick = function(){
//     drop.classList.toggle('active');
// }

function drop() {
    var droping = document.getElementById("options");
    droping.classList.toggle("active");
}

// let droping = document.querySelector('.options');
// droping.onclick = function(){
//     droping.classList.toggle('active');
// }

// function loadmore() {
//     var ext = document.getElementsById("gallery");
//     ext.classList.toggle("lm");
// }

$(document).ready(function () {
    
    //jQuery code here

    $('hp').click();

    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('change');
        }
        
        else {
            $('.header').removeClass('change');
        }
    });

    // $('.top').click(function () {
    //     // console.log('You clicked on top', this);
    //     $(this).toggleClass('change1');
    // });

    $('.exp').click(function (){
        $('.explore, .e-drop1, .e-drop2').toggle();
    });

    $('.load').click(function(){
        $(this).hide();
        $('.gallery').addClass("lm");
    });
});