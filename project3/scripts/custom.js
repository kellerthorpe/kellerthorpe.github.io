$("form").submit(function(e) {

    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("Please fill in required fields.");

            $(this).focus();

            e.preventDefault();
            return false;
        }
    });  return true;
});

/*
$(function(){           
        if (!Modernizr.inputtypes.date) {
        // If not native HTML5 support, fallback to jQuery datePicker
            $('input[type=date]').datepicker({
                // Consistent format with the HTML5 picker
                    dateFormat : 'yy-mm-dd'
                },
                // Localization
                $.datepicker.regional['it']
            );
        }
    });
    */