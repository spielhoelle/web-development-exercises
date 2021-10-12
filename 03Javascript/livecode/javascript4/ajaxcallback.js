var sendrequestsyncObj = document.getElementById('sendrequestsync');
var sendrequestasyncObj = document.getElementById('sendrequestasync');
var alertsomethingObj = document.getElementById('alertsomething');
var data = null;

// blocking I/O operation waiting for response to arrive
sendrequestsyncObj.onclick = function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://cileria.com:3050/longrequest', false);  // `false` makes the request synchronous
    request.send(null);
    console.log('data: ' + request.responseText);
    if (request.status === 200) {
      console.log(request.responseText);
    }
}

// non-blocking I/O operation using callbacks
sendrequestasyncObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cileria.com:3050/longrequest', true);
    xhr.onload = function() { 
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            var data = xhr.responseText;
            var dataObj = JSON.parse(data);
            
            console.log(data);
            console.log(dataObj);                     
        }
    }
    xhr.send();    
}

alertsomethingObj.onclick = function() {
    console.log('do something');
}