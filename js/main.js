$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider3').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider4').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider6').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider7').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider8').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider9').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider10').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider11').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider12').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider13').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider14').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider15').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider16').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider17').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider18').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider19').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider20').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});
$('.slider21').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
});


$('.topart').click(function (e) {
    var articul = $(this).parent().find('.articl').text(); //получаем название товара
    $("input[name='comment']").val(articul); // вставляем название в input  vitrina-but2
    $(".name-art").text(articul);
});

$('.infoart').click(function (e) {
    var articul2 = $(this).parent().find('.articl').text(); //получаем название товара
    $("input[name='comment']").val(articul2); // вставляем название в input  vitrina-but2
    $(".name-art").text(articul2);
});



/* scroll */
$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});




/* lazy load */
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});