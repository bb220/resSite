//my js


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
        var $topbar = $('.top-bar');
        var $btn = $('.btn');
        var $icon = $('#menuToggle');
        
      //headroom
      // grab an element
      var myElement = document.querySelector("#header");
      // construct an instance of Headroom, passing the element
      var headroom  = new Headroom(myElement);
      // initialise
      headroom.init(); 

      //Sets the height of the landing page to fit the screen, 70px is the height of the navbar
        $topPage.css("height", viewportHeight);
      

      //changes top-bar bg color
      var topBar = new Waypoint({
        element: $topbar,
        handler: function() {
          console.log('top-bar activate');
          
        },
        
      })

      //Adjusting "active" class to update with user scroll via waypoints plugin
      //There are two waypoints for each section: one at the top and one at the bottom of the section
      //id names don't necessarilly correspond with the content
      //First section
      var aboutWaypoint = new Waypoint({
        element: $red,
        handler: function(direction) {
          //changes top bar background to none
          if (direction == "up") {
            console.log('top-bar deactivate');
            $topbar.css("background", "none");
            $topbar.removeClass("shadow");
            var $toDeactivate = $right.find('.active');
            $toDeactivate.removeClass('active');
            $btn.css("display", "none");
            $icon.css("display", "none");
          }
          else {
          console.log('About Section');
          $topbar.css("background", "white");
          $topbar.addClass("shadow");
          $btn.css("display", "block");
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $aboutBtn.addClass('active');
          $icon.css("display","block");
          }
        },
        
      })
      var aboutWaypointBottom = new Waypoint({
        element: $bottomRed,
        handler: function() {
          console.log('About Section');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $aboutBtn.addClass('active');
        },
        
      })

      //Second Section
      var eventsWaypoint = new Waypoint({
        element: document.getElementById('events'),
        handler: function() {
          console.log('events sections');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $eventsBtn.addClass('active');
        },
        
      })
      var eventsWaypoint = new Waypoint({
        element: document.getElementById('eventsBottom'),
        handler: function() {
          console.log('events sections');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $eventsBtn.addClass('active');
        },
        
      })

      //Third Section
      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('blue'),
        handler: function() {
          console.log('get involved');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $getinvolvedBtn.addClass('active');
        },
        
      })
      var getinvolvedWaypoint = new Waypoint({
        element: document.getElementById('getinvolvedBottom'),
        handler: function() {
          console.log('get involved');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $getinvolvedBtn.addClass('active');
        },
        
      })

      //Fourth Section
      var teamWaypoint = new Waypoint({
        element: document.getElementById('team'),
        handler: function() {
          console.log('meet the team');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $teamBtn.addClass('active');
        },
        
      })
      var teamWaypoint = new Waypoint({
        element: document.getElementById('teamBottom'),
        handler: function() {
          console.log('meet the team');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $teamBtn.addClass('active');
        },
        
      })

      //Fifth Section
      var contactWaypoint = new Waypoint({
        element: document.getElementById('green'),
        handler: function() {
          console.log('members');
          var $toDeactivate = $right.find('.active');
          $toDeactivate.removeClass('active');
          $contactBtn.addClass('active');
        },
        
      })

      

     

    
        
      //On click, navbar links scroll to corresponding section
        $aboutBtn.click(function(){
          //on small screen, closes menu
          $menuToggle.trigger('click');
          //scrolls to section
             $htmlbody.animate({
                  scrollTop: $("#red").offset().top 
              }, 500);
        });
        $eventsBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#events").offset().top 
              }, 500);
        });
        $getinvolvedBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#blue").offset().top 
              }, 500);
        });
        $teamBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#team").offset().top 
              }, 500);
        });
        $contactBtn.click(function(){
          $menuToggle.trigger('click');
            $htmlbody.animate({
                  scrollTop: $("#green").offset().top 
              }, 500);
        });
        
        $reslogotext.click(function(){
            $htmlbody.animate({
                  scrollTop: $topPage.offset().top 
              }, 500);
             
        });


      });

    //DOM Cache
    var $eventOne = $('#eventOne');
    var $eventTwo = $('#eventTwo');
    var $eventThree = $('#eventThree');
    var $eventFour = $('#eventFour');
    var $eventFive = $('#eventFive');
    /*var $eventSix = $('#eventSix');
    var $eventEight = $('#eventEight');
    var $eventSeven = $('#eventSeven'); */
    var $descOne = $('#descOne');
    var $descTwo = $('#descTwo');
    var $descThree = $('#descThree');
    var $descFour = $('#descFour');
    var $descFive = $('#descFive');
    /*var $descSix = $('#descSix');
    var $descSeven = $('#descSeven');
    var $descEight = $('#descEight');*/
  


    //On click of picture or description, Event Description toggles
   
    $eventOne.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descOne.slideToggle();
    });
    $descOne.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descOne.slideToggle();
    });

    $eventTwo.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descTwo.slideToggle();
    });
    $descTwo.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descTwo.slideToggle();
    });

    $eventThree.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descThree.slideToggle();
    });
    $descThree.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descThree.slideToggle();
    });

    $eventFour.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFour.slideToggle();
    });
    $descFour.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFour.slideToggle();
    });

    $eventFive.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFive.slideToggle();
    });
    $descFive.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descFive.slideToggle();
    });
    /*

    $eventSix.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSix.slideToggle();
    });
    $descSix.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSix.slideToggle();
    });

    $eventSeven.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSeven.slideToggle();
    });
    $descSeven.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descSeven.slideToggle();
    });

    $eventEight.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descEight.slideToggle();
    });
    $descEight.click(function(){
      var $active = $('#descriptions').find('.active');
      $active.removeClass('active');
      $descEight.slideToggle();
    }); */
    
    $(document).on('submit','form#contact',function(e){
      e.preventDefault();
      var $this = $(this);
      var $form_data = JSON.parse('{"' + decodeURIComponent(decodeURI($this.serialize())).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
      //replaces + with spaces for increased legibility
      var re = /\+/g;
      $form_data.name = $form_data.name.replace(re, ' ');
      $form_data.companyschool = $form_data.companyschool.replace(re, ' ');
      $form_data.message = $form_data.message.replace(re, ' ');

      if($form_data.honey==""){
        $('#status').text('Sending Email...');
        //Messages Calls => https://mandrillapp.com/api/docs/messages.html        
        $.ajax({
          type: 'POST',
          url: 'https://mandrillapp.com/api/1.0/messages/send.json',
          data: {
            'key': 'V8iEOxGT5MxpqRSX75dmAw',
            'message': {
              'from_email': decodeURIComponent($form_data.email),
              'to': [
                  {
                    'email':'info@rutrep.com',
                    'name': 'RUtrep',
                    'type': 'to'
                  },
                ],
              'autotext': 'true',
                'subject': 'Contact Form: '+ $form_data.name + ' from ' + $form_data.companyschool,
              'html': $form_data.message + ' - ' + $form_data.name + ', ' + $form_data.companyschool
            }
          },
         }).done(function(response) {
           $('#status').text('Email Sent Successfully!');
           $("form#contact input,form#contact textarea").prop('disabled', true);
           
         }).fail(function(e) {
           $('#status').text('Whoopsie! Your email failed to send due to: '+e.status+' '+e.statusText+'.');
         });
      }

    });