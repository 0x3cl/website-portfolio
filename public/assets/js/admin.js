$(document).ready(function() {
    $('#auth-container .form-group .form-control').each(function(a, b) {

        // input contains value
        if($(b).val()) {
            $($(this)).addClass('active');
            $('#auth-container .form-group label').removeClass('transition-3s');
        }

        // input has been focused
        $(b).focus(function() {
            $($(this)).addClass('active');
            $('#auth-container .form-group label').addClass('transition-3s');
        });

        // input has been focused out
        $(b).blur(function() {
            if($(this).val().length === 0) {
                $(this).removeClass('active');   
            }
        })
    })
})