$(document).ready(function() {

    // initialize AOS library
    AOS.init();

    // call loading function
    isLoading();

    // call darkmode function
    isDarkmode();

    // hamburger toggle class
    $(".hamburger-wrapper").on('click', function() {
        $(".sidebar").toggleClass("active");
        $(".hamburger-wrapper").toggleClass("active");
        $(".content").toggleClass("active");
    });

    // toggle arrow icon
    $(".arrow-icon").on('click', function() {
      $(this).toggleClass("active");
      $(".theme-settings").toggleClass("active");
    });


    // theme switch dark or light mode
    $("#themeSwitch").on('click', function() {
      $("body").toggleClass("dark-mode");
      localStorage.setItem('dark-theme', 'true');
      if($("body").hasClass("dark-mode")) {
        $("#labelSwitch").html('Go to Light <i class="bi bi-brightness-high-fill"></i>');
        localStorage.setItem('dark-theme', 'true');
      } else {
        $("#labelSwitch").html('Go to Dark <i class="bi bi-moon-stars-fill"></i>');
        localStorage.setItem('dark-theme', 'false');
      }
    });

    // loading screen
    function isLoading() {
      if($(".pre-loader").hasClass("active")) {
        setTimeout(function() {
          $(".pre-loader").fadeOut();
        }, 3000);
      } else {
          $(".pre-loader").fadeIn();
      }
    }

    // check if dark mode is true
    function isDarkmode() {
      let darkmode = localStorage.getItem('dark-theme');
      if(darkmode == 'true') {
        $("body").addClass("dark-mode");
        $('#themeSwitch').prop('checked', true);
      } else {
        $("body").removeClass("dark-mode");
        $('#themeSwitch').prop('checked', false);
      }
    }

    

})