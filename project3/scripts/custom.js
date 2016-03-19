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
Code from:
http://stackoverflow.com/questions/23261301/required-attribute-not-work-in-safari-browser
*/
