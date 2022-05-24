var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

