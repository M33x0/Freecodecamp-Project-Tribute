$(function() {
    //Smart Scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    // Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
    
    
    //Video Options
    $('body').vidbg({
        'mp4': 'http://res.cloudinary.com/dxdte19y4/video/upload/v1462543462/bg-video_dwpv5p.mp4',
        /*'webm': 'path/to/video.webm',
        'poster': 'path/to/fallback-image.png',*/
    }, {
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        resizing: true,
        overlay: false,
        overlayColor: '#000',
        overlayAlpha: '0.3',
        
        
    }); 
});