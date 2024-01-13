 // Navaigation Bar start

 $( document ).ready(function() {

$('#responsive-menu').click(function(){
    $('nav .navigation ul').addClass('active')
});
$('#close-menu').click(function(){
    $('nav .navigation ul').removeClass('active')
});

 });