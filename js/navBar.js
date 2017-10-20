$('#registerForm').submit(function (e){
    e.preventDefault();
    var formData = {
        'firstName' : $('input[name=firstName]').val(),
        'lastName'  : $('input[name=lastName]').val(),
        'dob'       : $('input[name=dob]').val(),
        'userName'  : $('input[name=userName]').val(),
        'password'  : $('input[name=password]').val(),
        'email'     : $('input[name=email]').val(),
        'phone'     : $('input[name=phone]').val()
    };

    $.ajax({
        url: "./logic/checklogin.php",
        data: formData,
        type: 'post',
        method: 'POST',
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //Error in setting status
            
        },
        success: function(result) {
            console.log(result);
            if(result == 'registered'){
                location.reload();
            }
        }
    });
});

$('#loginForm').submit(function (e){
    e.preventDefault();
    var formData = {
        'userName'  : $('#loginForm input[name=userName]').val(),
        'password'  : $('#loginForm input[name=password]').val()
    };

    $.ajax({
        url: "./logic/checklogin.php",
        data: formData,
        type: 'post',
        method: 'POST',
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //Error in setting status
            console.log("error ajax post to checklogin");
        },
        success: function(result) {
            if(result == "correct"){
                location.reload();
            }else if(result == "wrong"){
                $('#popContainer').html('<div class="alert " role="alert" style="background-color:d61726; color:white;">'
                +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                +'   <span aria-hidden="true">&times;</span></button>'
                +'<strong>Error!</strong> Invalid login details were provided.</div>');
                $('#popContainer').show();
            }
        }
    });
});
