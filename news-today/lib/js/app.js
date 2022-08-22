$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 0) {
          $(".header").addClass("active");
          $(".menu-container").addClass("active");
        } else {
          $(".header").removeClass("active");
          $(".menu-container").removeClass("active");
        }
    });
})