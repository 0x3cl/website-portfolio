$(document).ready(function() {

    // call function
    isSidebarActive();

    // set active on navbar when scroll
    $(window).scroll(function(){
        if(this.scrollY > 0) {
          $(".navbar").addClass("active");
        } else {
          $(".navbar").removeClass("active");
        }
    });

    $(".hamburger-wrapper").on('click', function() {
      
      // toggle active  
      $(".sidebar").toggleClass("active");
      $(".hamburger-wrapper").toggleClass("active");

      // sidebar has class active
      if($(".sidebar").hasClass("active")) {
        localStorage.setItem('sidebarActive', 'true');
      } else {
        localStorage.setItem('sidebarActive', 'false');
      }


  });

    // set active inn nav-item
    $(document).on("click", ".sidebar .nav-item", function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    
    //  check if sidebar is on active state
    function isSidebarActive() {
      let active = localStorage.getItem('sidebarActive');
      if(active == 'true') {
        $(".sidebar").addClass("active");
        $(".hamburger-wrapper").addClass("active");
      } else {
        $(".sidebar").removeClass("active");
        $(".hamburger-wrapper").removeClass("active");
      }
    }


});