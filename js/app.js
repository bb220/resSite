$(document).foundation();

//headroom.js
/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);


//custom js
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
        var $header = $('#header');
        var $activate = $('#activate');
        
      //headroom
      // grab an element
      var myElement = document.querySelector("#header");
      // construct an instance of Headroom, passing the element
      var headroom  = new Headroom(myElement);
 

      //Sets the height of the landing page to fit the screen, 70px is the height of the navbar
        $topPage.css("height", viewportHeight - 55);
      

      //Adjusting "active" class to update with user scroll via waypoints plugin
      //There are two waypoints for each section: one at the top and one at the bottom of the section (except for the last section which only has a top waypoint)
      //note: id names don't necessarilly correspond with the content
      var activateWaypoint = new Waypoint({
        element: $activate,
        handler: function(direction) {
          if (direction == "down") {
          console.log("top-bar activate");
          $header.css("position", "fixed");
          headroom.init();
          }
          else {
                      console.log('top-bar deactivate');
            $header.css("position", "relative");
            headroom.destroy();
          }
        }
      })
      //First section
      var aboutWaypoint = new Waypoint({
        element: $red,
        handler: function(direction) {
          //Releases navbar and deactivates the headroom effect
          if (direction == "up") {
            var $toDeactivate = $right.find('.active');
            $toDeactivate.removeClass('active');

          }
          //Fixes navbar to top and initializes the headroom effect
          else {
            console.log('About Section');
            var $toDeactivate = $right.find('.active');
            $toDeactivate.removeClass('active');
            $aboutBtn.addClass('active');

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



    //Event description on click effect

    //DOM Cache
    var $eventOne = $('#eventOne');
    var $eventTwo = $('#eventTwo');
    var $eventThree = $('#eventThree');
    var $eventFour = $('#eventFour');
    var $eventFive = $('#eventFive');
    var $descOne = $('#descOne');
    var $descTwo = $('#descTwo');
    var $descThree = $('#descThree');
    var $descFour = $('#descFour');
    var $descFive = $('#descFive');


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
    


    //Contact form AJAX functionality
    //ties into Mandrill API    
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

