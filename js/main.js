$(document).ready(function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            $('#nav').slideDown();
        }
        else {
            $('#nav').slideUp();
        }
    }, false);
    var emailStatus = null;
    $('#email-start').click(function () {
        $('#form').fadeIn('fast');
        emailStatus = "Email Support";
    });
    $('#one-on-one').click(function () {
        $('#form').fadeIn('fast');
        emailStatus = "One on One";
    });
    $('#submit').click(function () {
        emailStatus = 'Feedback';
        var name = document.getElementsByName('name').val();
        var email = document.getElementsByName('email').val();
        var message = document.getElementsByName('message').val();
        $.ajax({
            type: "POST",
            url: 'https://www.readmybluebutton.com/sjcc/email.php',
            data: {name: name, email: email, message: message, type: emailStatus},
            success: function (response) {
                if (response == "error") {
                    $('#form').fadeOut('fast');
                    alert('FAILED TO SEND MESSAGE');
                }
                //$('#task-summary').html(response);
                alert('Message Sent!');
            },
            error: function (xhr, status, error) {
                alert('FAILED TO SEND MESSAGE');
            }
        });
    });
    $('#cancel').click(function () {
        $('#form').fadeOut('fast');
        //document.getElementById("#form-name")[0].reset();
    });
    $('#form-send').click(function () {
        var name = document.getElementsByName('form-name').val();
        var email = document.getElementsByName('form-email').val();
        var message = document.getElementsByName('form-content').val();
        $.ajax({
            type: "POST",
            url: 'https://www.readmybluebutton.com/sjcc/email.php',
            data: {name: name, email: email, message: message, type: emailStatus},
            success: function (response) {
                if (response == "error") {
                    $('#form').fadeOut('fast');
                    alert('FAILED TO SEND MESSAGE');
                }
                //$('#task-summary').html(response);
                alert('Message Sent!');
            },
            error: function (xhr, status, error) {
                alert('FAILED TO SEND MESSAGE');
            }
        });
    });
});