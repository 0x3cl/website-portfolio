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
    
    $("#add-field-skills").on('click', () => {
        const div = `
        <div class="col-12 col-md-6 mb-4">
            <label class="mb-2">Skill Name</label>
            <input type="text" name="skill-name" id="skill-name" class="form-control" placeholder="Write Here...">
        </div>
        <div class="col-12 col-md-6 mb-4">
            <label class="mb-2">Skill Image</label>
            <input type="text" name="skill-image" id="skill-image" class="form-control" placeholder="Write Here...">
        </div>
        `;
        $(".add-field").append(div);
    })

    $(document).on('click', '.btn-mob-dashboard', () => {
        $("#dashboard .sidebar").toggleClass('active');
    })

})