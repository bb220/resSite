
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

      //Sets the height of the landing page to fit the screen, 80px is the height of the navbar
        $topPage.css("height", viewportHeight - 80);


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
        offset: 80
      })
      var aboutWaypointBottom = new Waypoint({
        element: $bottomRed,
        handler: function() {
          console.log('About Section');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $aboutBtn.addClass('active');
        },
        offset: 80
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
        offset: 80
      })
      var eventsWaypoint = new Waypoint({
        element: document.getElementById('eventsBottom'),
        handler: function() {
          console.log('events sections');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $eventsBtn.addClass('active');
        },
        offset: 80
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
        offset: 80
      })
      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('getinvolvedBottom'),
        handler: function() {
          console.log('get involved');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $getinvolvedBtn.addClass('active');
        },
        offset: 80
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
        offset: 80
      })
      var teamWaypoint = new Waypoint({
        element: document.getElementById('teamBottom'),
        handler: function() {
          console.log('meet the team');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $teamBtn.addClass('active');
        },
        offset: 80
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
        offset: 80
      })

     

      //slogan fade
        $slogan.delay(900).fadeTo(200, 1);
        
      //On click, navbar links scroll to corresponding section
        $aboutBtn.click(function(){
             $htmlbody.animate({
                  scrollTop: $("#red").offset().top - 79
              }, 500);
        });
        $eventsBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#events").offset().top - 79
              }, 500);
        });
        $getinvolvedBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#blue").offset().top - 79
              }, 500);
        });
        $teamBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#team").offset().top - 79
              }, 500);
        });
        $contactBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#green").offset().top - 79
              }, 500);
        });
        $reslogotext.click(function(){
            $htmlbody.animate({
                  scrollTop: $topPage.offset().top - 80
              }, 500);
             
        });


      });
    
