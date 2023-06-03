$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('#header').addClass('change');
    } else {
        $('#header').removeClass('change');
    }
});

function show(anything){
    document.querySelector('.options').value = anything;
}