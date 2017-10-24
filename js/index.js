
  $(document).ready(function() {
    $('#closeBtn').click(function() {
      $('.homeBackgroundContainer').fadeOut();
      $('.backgroundOverlay').fadeOut();
    })
    // setTimeout(function() {
    //   $('.homeBackgroundContainer').fadeIn();
    //   $('.backgroundOverlay').fadeIn();
    // }, 3000)
    $('.backgroundOverlay').click(function(event) {
      $('.homeBackgroundContainer').fadeOut();
      $('.backgroundOverlay').fadeOut();
    });

    //slide trigger logic
    $('#slideTrigger').click(function(event) {
      $('#body').toggleClass('body-move-down');
      $('.yellowbee').fadeOut()
    });
    $('.closeSlideBtn').click(function(event) {
      $('#body').toggleClass('body-move-down');
      $('.yellowbee').fadeIn();
    });
    $('select').material_select();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
     
    $(".button-collapse").sideNav();
         
    $('.featured-flights').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          center: false,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 50,
                  margin: 30,
                  center: false,
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              },
              1300: {
                items: 3
              }
          },
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true
      })
      $('.popular-flights').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          center: false,
          responsive:{
              0:{
                  items:1,
                  stagePadding: 50,
                  margin: 30,
                  center: false,
              },
              600:{
                  items:3
              },
              1000:{
                  items:4
              },
              1300: {
                items: 4
              }
          },
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true
      })
      $('.featured-trainers').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              },
              1300: {
                items: 3
              }
          },
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true
      })
      $('.featured-school').owlCarousel({
          loop:true,
          margin:20,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              },
              1300: {
                items: 3
              }
          },
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:true
      })



    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay1');

    /* Need this to clear out the keyframe classes so they dont clash with each other between ener/leave. Cheers. */
    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal.removeClass('state-appear').addClass('state-leave');
    });

    $('.authBtn').on('click', function(){
      console.log(12111)
      $overlay.addClass('state-show');
      $modal.removeClass('state-leave').addClass('state-appear');
    });
      $('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: true, 
           hover: false, 
           gutter: 0, 
           belowOrigin: false 
           }
      );
    $(function() {
        var arr = ['S','Sk','Sky','Sky','Sky','Sky','Sky','Sky','Sky','Sky','Sk','S','T', 'To', 'Tou', 'Tour', 'Tour', 'Tour', 'Tour', 'Tour', 'Tour', 'Tou', 'T','F','Fl','Fli','Flig','Fligh','Flight', 'Flight ', 'Flight T', 'Flight Tr', 'Flight Tra', 'Flight Trai', 'Flight Train', 'Flight Traini', 'Flight Trainin', 'Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Training','Flight Trainin','Flight Traini','Flight Tra','Flig','F',];
        var elem = $('#ani');
        var i = 0;
        var loop = function(){
          elem.text(arr[i++]);
          if(i>arr.length) {
            //clearInterval(intervalID);
          //   if (i>=12) {
          //   $('#ani').css('color', 'red')
          // }
              i=0;
            }

        }
        
        var intervalID = setInterval(loop, 100);
      })
  });