
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

      //landing height set 80px is height of navbar
        $topPage.css("height", viewportHeight - 80);

      //Adjusting "active" class to update with user scroll via waypoints plugin
      var aboutWaypoint = new Waypoint({
        element: document.getElementById('red'),
        handler: function() {
          console.log('About Section');
        },
        offset: 80
      })

      var eventsWaypoint = new Waypoint({
        element: document.getElementById('events'),
        handler: function() {
          console.log('events sections');
        },
        offset: 80
      })

      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('blue'),
        handler: function() {
          console.log('get involved');
        },
        offset: 80
      })

      var teamWaypoint = new Waypoint({
        element: document.getElementById('team'),
        handler: function() {
          console.log('meet the team');
        },
        offset: 80
      })

      var contactWaypoint = new Waypoint({
        element: document.getElementById('green'),
        handler: function() {
          console.log('contact info');
        },
        offset: 80
      })
     

      //slogan fade
        $slogan.delay(900).fadeTo(200, 1);
        
      //tabs on click scroll to section
        $aboutBtn.click(function(){
             $htmlbody.animate({
                  scrollTop: $("#red").offset().top - 80
              }, 500);
        });
        $eventsBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#events").offset().top - 80
              }, 500);
        });
        $getinvolvedBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#blue").offset().top - 80
              }, 500);
        });
        $teamBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#team").offset().top - 80
              }, 500);
        });
        $contactBtn.click(function(){
            $htmlbody.animate({
                  scrollTop: $("#green").offset().top - 80
              }, 500);
        });
        $reslogotext.click(function(){
            $htmlbody.animate({
                  scrollTop: $topPage.offset().top - 80
              }, 500);
        });


      });
    