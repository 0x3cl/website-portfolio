$(document).ready(function() {

    // initalize theme
    themeStatus();

    // button scroll to top
    $(window).scroll(function() {
        if($(window).scrollTop() > 300) {
            $(".btn-scroll-top").fadeIn();
            $(document).on('click', '.btn-scroll-top', function() {
                window.scrollTo(0, 0);
            }); 
        } else {
            $(".btn-scroll-top").fadeOut();
        }
    });

    // hamburger animation
    $(".hamburger-wrapper").on("click", function() {
        $(this).toggleClass("active");
    })

    // toggle dark mode
    $("#toggle-darkmode").on("click", function() {
        if($("body").hasClass("dark-mode")) {
            $("body").toggleClass("dark-mode");
            $(".navbar-brand").html('<img src="assets/images/logo-dark.png" alt="logo" srcset="assets/images/logo-dark.png" class="w-25">');
            $("#toggle-darkmode").html("<i class='bx bx-moon'></i> Dark");
            localStorage.setItem("dark-mode", "false");
        } else {
            $("body").toggleClass("dark-mode");
            $(".navbar-brand").html('<img src="assets/images/logo-light.png" alt="logo" srcset="assets/images/logo-light.png" class="w-25">');
            $("#toggle-darkmode").html("<i class='bx bx-sun' ></i> Light");        
            localStorage.setItem("dark-mode", "true");
        }
    })

    function themeStatus() {
        var darkmode = localStorage.getItem("dark-mode");
        if(darkmode === "true") {
            toggleDark();
        } else if(darkmode === "false") {
            toggleLight();
        }
    }

    function toggleLight() {
        $("body").removeClass("dark-mode");
        $(".navbar-brand").html('<img src="assets/images/logo-dark.png" alt="logo" srcset="assets/images/logo-dark.png" class="w-25">');
        $("#toggle-darkmode").html("<i class='bx bx-moon'></i> Dark");
        $("meta[name='theme-color']").attr('content', '#fff');
    }

    function toggleDark() {
        $("body").addClass("dark-mode");
        $(".navbar-brand").html('<img src="assets/images/logo-light.png" alt="logo" srcset="assets/images/logo-light.png" class="w-25">');
        $("#toggle-darkmode").html("<i class='bx bx-sun' ></i> Light");    
        $("meta[name='theme-color']").attr('content', '#191923');    
    }
});
