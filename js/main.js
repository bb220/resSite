
    $(function(){
      //DOM cache
        var $slogan = $('#slogan');
        var viewportHeight = $(window).height();
        var $aboutBtn = $('#aboutBtn');
        var $eventsBtn = $('#eventsBtn');
        var $getinvolvedBtn = $('#getinvolvedBtn');
        var $teamBtn = $('#teamBtn');
        var $contactBtn = $('#contactBtn');
        var $reslogotext = $('#reslogotext');
        var $htmlbody = $('html, body');
        var $topPage = $('#topPage');
        var $right = $('.right');
        var $red = $('#red');
        var $bottomRed = $('#bottomRed');
        var $menuToggle = $('#menuToggle');
        


      //Sets the height of the landing page to fit the screen, 80px is the height of the navbar
        $topPage.css("height", viewportHeight - 70);


      //Adjusting "active" class to update with user scroll via waypoints plugin
      //There are two waypoints for each section: one at the top and one at the bottom of the section

      //About
      var aboutWaypoint = new Waypoint({
        element: $red,
        handler: function() {
          console.log('About Section');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $aboutBtn.addClass('active');
        },
        offset: 70
      })
      var aboutWaypointBottom = new Waypoint({
        element: $bottomRed,
        handler: function() {
          console.log('About Section');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $aboutBtn.addClass('active');
        },
        offset: 70
      })

      //Events
      var eventsWaypoint = new Waypoint({
        element: document.getElementById('events'),
        handler: function() {
          console.log('events sections');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $eventsBtn.addClass('active');
        },
        offset: 70
      })
      var eventsWaypoint = new Waypoint({
        element: document.getElementById('eventsBottom'),
        handler: function() {
          console.log('events sections');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $eventsBtn.addClass('active');
        },
        offset: 70
      })

      //Get Involved
      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('blue'),
        handler: function() {
          console.log('get involved');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $getinvolvedBtn.addClass('active');
        },
        offset: 70
      })
      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('getinvolvedBottom'),
        handler: function() {
          console.log('get involved');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $getinvolvedBtn.addClass('active');
        },
        offset: 70
      })

      //Meet the Team
      var teamWaypoint = new Waypoint({
        element: document.getElementById('team'),
        handler: function() {
          console.log('meet the team');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $teamBtn.addClass('active');
        },
        offset: 70
      })
      var teamWaypoint = new Waypoint({
        element: document.getElementById('teamBottom'),
        handler: function() {
          console.log('meet the team');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $teamBtn.addClass('active');
        },
        offset: 70
      })

      //Contact
      var contactWaypoint = new Waypoint({
        element: document.getElementById('green'),
        handler: function() {
          console.log('contact info');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $contactBtn.addClass('active');
        },
        offset: 70
      })

     

      //slogan fade
        $slogan.delay(900).fadeTo(100, 1);
        
      //On click, navbar links scroll to corresponding section
        $aboutBtn.click(function(){
          //on small screen, closes menu
          $menuToggle.trigger('click');
          //scrolls to section
             $htmlbody.animate({
                  scrollTop: $("#red").offset().top - 69
              }, 500);
        });
        $eventsBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#events").offset().top - 69
              }, 500);
        });
        $getinvolvedBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#blue").offset().top - 69
              }, 500);
        });
        $teamBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#team").offset().top - 69
              }, 500);
        });
        $contactBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#green").offset().top - 69
              }, 500);
        });
        $reslogotext.click(function(){
            $htmlbody.animate({
                  scrollTop: $topPage.offset().top - 70
              }, 500);
             
        });


      });

    //DOM Cache
    var $eventOne = $('#eventOne');
    var $eventTwo = $('#eventTwo');
    var $eventThree = $('#eventThree');
    var $eventFour = $('#eventFour');
    var $eventFive = $('#eventFive');
    var $eventSix = $('#eventSix');
    var $eventEight = $('#eventEight');
    var $eventSeven = $('#eventSeven');
    var $descOne = $('#descOne');
    var $descTwo = $('#descTwo');
    var $descThree = $('#descThree');
    var $descFour = $('#descFour');
    var $descFive = $('#descFive');
    var $descSix = $('#descSix');
    var $descSeven = $('#descSeven');
    var $descEight = $('#descEight');
  


    //On click, Event Description appears
   
    $eventOne.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descOne.addClass('active');
    });

    $eventTwo.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descTwo.addClass('active');
    });

    $eventThree.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descThree.addClass('active');
    });

    $eventFour.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFour.addClass('active');
    });

    $eventFive.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFive.addClass('active');
    });

    $eventSix.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSix.addClass('active');
    });

    $eventSeven.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSeven.addClass('active');
    });

    $eventEight.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descEight.addClass('active');
    });
    
