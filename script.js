$(function () {
    var $registerForm = $("#register");
    $registerForm.validate({
        rules: {
            username: {
                required: true,
                lattersonly: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                numericonly: true,
                minlength: 10,
                mixlength: 12
            },
            check: {
                required: true
            },
            password: {
                required: true
            },
            cpassword: {
                required: true,
                equalTo:'#password'
            }
        },
        messages: {
            username: {
                required: 'Username must be required',
                lattersonly: 'Invalid name'
            },
            email: {
                required: 'Email must be required',
                email: 'Invalid Email'
            },
            phone: {
                required: 'Phone must be required',
                numericonly: 'Invalid Number',
                minlength: 'min 10 digit',
                mixlength: 'mix 10 digit'
            },
            check: {
                required: 'Option must be required'
            },
            password: {
                required: 'Password must be required'
            },
            cpassword: {
                required: 'Confirm password must be required',
                equalTo: 'password mismatch'
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents(".gen"));
            } else {
                error.insertAfter(element);
            }
        }
    });

    jQuery.validator.addMethod('lattersonly', function (value, element) {
        return /^[a-zA-Z_\s-]+$/.test(value);
    });

    jQuery.validator.addMethod('numericonly', function (value, element) {
        return /^[0-9]+$/.test(value);
    });
});
