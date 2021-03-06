// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
// 
// bootstrap-sprockets provides individual Bootstrap components for ease of debugging
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// https://marksheet.io/sass-variables.html
// https://www.semrush.com/blog/semantic-html5-guide/
// https://terminal.sexy/#Jygi-PjyJygi-SZypuIu9L91ZtnvroH_oe_k-PjydXFe-SZypuIu9L91ZtnvroH_oe_k-fj1
// https://thememakker.com/templates/aero/html/index.html#dark
// http://innovationplans.com/themeforest/sodic/
// https://www.cssfilters.co/
// http://xerotheme.com/keyra/01_theme/html/index.html
$(document).on('turbolinks:load', function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  function ckScrollInit(items, trigger) {
    items.each(function() {
      var ckElement = $(this),
        AnimationClass = ckElement.attr("data-animation"),
        AnimationDelay = ckElement.attr("data-animation-delay");

      ckElement.css({
        "-webkit-animation-delay": AnimationDelay,
        "-moz-animation-delay": AnimationDelay,
        "animation-delay": AnimationDelay,
        opacity: 0
      });

      var ckTrigger = trigger ? trigger : ckElement;

      console.log(ckTrigger);

      var wp = new Waypoint({
        element: ckTrigger[0],
        handler: function() {
          if (ckTrigger.hasClass("number")) {
            ckElement.css("opacity", "1");
            var num = ckTrigger.attr("data-number");
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
            ckElement.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              });
            
          } else {
            ckElement.addClass("animated").css("opacity", "1");
            ckElement.addClass("animated").addClass(AnimationClass);
          }
          
        },
        offset: "90%"
      });

      /**
      ckTrigger.waypoint(
        function() {
          ckElement.addClass("animated").css("opacity", "1");
          ckElement.addClass("animated").addClass(AnimationClass);
        },
        {
          triggerOnce: true,
          offset: "90%"
        }
      );
      **/
    });
  }

  ckScrollInit($(".animation"));
  
 
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});



/*===================================*
SPOP JS
*===================================*/
// var times = [3120, 4442, 5224, 7510, 8636, 16002, 17222];
var times = [8000, 8400, 8500, 8000, 6120, 6120, 6120];
var myInterval = setInterval('notification()', time());
function time() {
    return times[parseInt(Math.random()*7)] + 5000;
}

function notification() {
  spop({
    template: '<div class="qr-notification d-flex align-items-center"><div class="notification-inner"><img src="/qr.png" width="128" alt="Scan this"><p>Scan the above code to start the Crypto Scavenger Hunt</p></div></div>',
    group: 'cod',
    style: 'nav-fixed',// error or success
    position: 'bottom-left',
    autoclose: 8000,
    icon: false
  });
  clearInterval(myInterval);
  myInterval = setInterval('notification()', time());
}

