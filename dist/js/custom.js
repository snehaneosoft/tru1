$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    center: true,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

function menuToggle(){
    let $menu = document.getElementById('header-cont-wrap');
     $menu.classList.contains('open') ? $menu.classList.remove('open') : $menu.classList.add('open');
    // if($menu.classList.contains('open')){
    //     $menu.classList.remove('open')
    // }
    // else{
    //     $menu.classList.add('open');
    // }
}