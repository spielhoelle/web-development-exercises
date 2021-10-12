var getPingObj = document.getElementById('get-ping');

var postPingObj = document.getElementById('post-ping');

getPingObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://cileria.com:3050/ping');
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

postPingObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://cileria.com:3050/ping');
    xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            var data = xhr.responseText;
            var dataObj = JSON.parse(data);
            
            console.log(data);
            console.log(dataObj);                     
        }
    }

    var body = {
        message: 'hallo world',
        weather: 'not so hot today'
    };

    xhr.send(JSON.stringify(body)); 
}

// task:
// create a login with a
// username and a password and
// a button "Login", that sends a POST request to cileria.com:3050/fakelogin and behaves like the Postman request that we have created. Think of the body of the request and console.log out whether the Login was successful or not.

var loginObj = document.getElementById('login');
loginObj.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://cileria.com:3050/fakelogin');
    xhr.setRequestHeader('Content-Type', 'application/json'); // type of body
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log('success, status code is 200');
            
            var data = xhr.responseText;
            var dataObj = JSON.parse(data);
            
            console.log(data);
            console.log(dataObj);
            
            if(dataObj.error === 'username and password not found') {
                alert('Incorrect login.');
            }
        }
    }

    var usernameObj = document.getElementById('username');
    var passwordObj = document.getElementById('password');

    var body = {
        username: usernameObj.value,
        password: passwordObj.value
    };

    xhr.send(JSON.stringify(body));     
}


