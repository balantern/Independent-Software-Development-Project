jQuery(document).ready( function ($) {
    var form = $('#supplies-services-request');
    
    var formMessages = $('#form-messages');

    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
    
        //serialize form data
        var formData = $(form).serialize();
        
        //submit form using ajax
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
    
        .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

        // Set the message text.
            $(formMessages).text(response);

       // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
    
        .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

        // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            }
        
            else {
                $(formMessages).text('An error occured and your message could not be sent.');
            }
        });
    }); 
});
