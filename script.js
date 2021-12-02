$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
});

    //switch toggle
     
    var blkIco = document.getElementsByClassName("menu-btn");
    $(".switch").click(function(){
        $("body").toggleClass("switchMode");
        $("ul").toggleClass("switchMode");
        $(".menu-btn").toggleClass("menu-btn-blk");
    });



    // slide-up script
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
    });
 
    // toggle menu/navabar script
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Ux designer", "Non lo so", "Social media manager", "Web designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["Ux designer", "Non lo so", "Social media manager", "Web designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
