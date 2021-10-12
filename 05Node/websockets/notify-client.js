$(function () {
    // for better performance - to avoid searching in DOM
    var content = $('#content');
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    // if browser doesn't support WebSocket, just show
    // some notification and exit
    if (!window.WebSocket) {
        content.html('Sorry, but your browser doesn\'t support WebSocket.');
        return;
    }
    // open connection
    var connection = new WebSocket('ws://127.0.0.1:1337');    
    connection.onopen = function () {
        content.append('connection opened ... ');
    };

    connection.onerror = function (error) {
      // just in there were some problems with connection...
      content.html('Sorry, but there\'s some problem with your '
           + 'connection or the server is down.');
    };

    // most important part - incoming messages
    connection.onmessage = function (message) {
      // try to parse JSON message. Because we know that the server
      // always returns JSON this should work without any problem but
      // we should make sure that the massage is not chunked or
      // otherwise damaged.
      content.append('<div>' + message.data + '</div>');
    }
    /**
     * Send message when user presses Enter key
     */
    // input.keydown(function(e) {
    //   if (e.keyCode === 13) {
    //     var msg = $(this).val();
    //     if (!msg) {
    //       return;
    //     }
    //     // send the message as an ordinary text
    //     connection.send(msg);
    //     $(this).val('');
    //     // disable the input field to make the user wait until server
    //     // sends back response
    //     input.attr('disabled', 'disabled');
    //     // we know that the first message sent from a user their name
    //     if (myName === false) {
    //       myName = msg;
    //     }
    //   }
    // });
    /**
     * This method is optional. If the server wasn't able to
     * respond to the in 3 seconds then show some error message 
     * to notify the user that something is wrong.
     */
    // setInterval(function() {
    //   if (connection.readyState !== 1) {
    //     status.text('Error');
    //     input.attr('disabled', 'disabled').val(
    //         'Unable to communicate with the WebSocket server.');
    //   }
    // }, 3000);
});