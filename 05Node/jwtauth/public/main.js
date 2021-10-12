$(document).ready(function() {
    console.log('ready');    
});

$('#btnlogin').on('click', function() {
    $.ajax({
        url: '/login',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({ name: 'jan',password: 'foobar'}),
        success: function(data) {
            console.log(data);
            $('#token').val(data.token)
        },
        error: function(err) {
            console.log(err);
        }
    });
});

$('#btncontent').on('click', function() {
    $.ajax({
        url: '/content',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        headers: {
            'Authorization': 'Bearer ' + $('#token').val()
        },
        success: function(data) {
            console.log(data);
            $('#result').html(data.result)
        },
        error: function(err) {
            console.log(err);
        }
    });
});