var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var adduserlinkObj = document.getElementById('adduserlink');
var addcommentlinkObj = document.getElementById('addcommentlink');
var mainObj = document.getElementById('main');
var bodyObj = document.getElementsByTagName('body')[0];
var addcommentObj = document.getElementById('addcomment');
var adduserObj = document.getElementById('adduser');
var adduserbuttonObj = document.getElementById('adduserbutton');
var addcommentbuttonObj = document.getElementById('addcommentbutton');

function createUserTable( userArray ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<userArray.length; i++) {
		var tableRowObj = document.createElement('tr');

		var j = 1;
		for(key in userArray[i]) {

			var tableCellObj = document.createElement('td');
			tableCellObj.textContent = userArray[i][key];
			tableRowObj.appendChild(tableCellObj);

			if(j === 4) 
				break; 
			else 
				j++; 
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}

function createCommentsTable( commentsArray ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<commentsArray.length; i++) {
		var tableRowObj = document.createElement('tr');

		for(key in commentsArray[i]) {
			var tableCellObj = document.createElement('td');
			tableCellObj.textContent = commentsArray[i][key];
			tableRowObj.appendChild(tableCellObj);
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}

userlinkObj.onclick = function() {
	// task: mainObj.innerHTML = 'users page';
	mainObj.innerHTML = '';
	adduserObj.style.display = 'none';
	addcommentObj.style.display = 'none';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3050/users');
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        //console.log(xhr.responseText);        
	        var responseObj = JSON.parse(xhr.responseText);
	        console.log(responseObj);
			//mainObj.innerHTML = xhr.responseText;
			var userTable = createUserTable( responseObj );
			mainObj.appendChild( userTable );
	    }
	    else {
	        console(xhr.status);
	    }
	};

	xhr.send();
}

commentslinkObj.onclick = function() {
	// task: mainObj.innerHTML = 'comments page';
	mainObj.innerHTML = '';
	adduserObj.style.display = 'none';
	addcommentObj.style.display = 'none';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3050/comments');
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        //console.log(xhr.responseText);        
	        var responseObj = JSON.parse(xhr.responseText);
	        console.log(responseObj);
			//mainObj.innerHTML = xhr.responseText;
			var commentsTable = createCommentsTable( responseObj );
			mainObj.appendChild( commentsTable );			
	    }
	    else {
	        console('HTTP-error' + xhr.status);
	    }
	};

	xhr.send();
}	
	
addcommentlinkObj.onclick = function() {
	mainObj.innerHTML = '';
	adduserObj.style.display = 'none';
    addcommentObj.style.display = 'block';
}

adduserlinkObj.onclick = function() {
	mainObj.innerHTML = '';
	adduserObj.style.display = 'block';
	addcommentObj.style.display = 'none';
}

adduserbuttonObj.onclick = function() {
	var firstnameinputObj = document.getElementById('firstnameinput');
	var usernameinputObj = document.getElementById('usernameinput');
	var emailinputObj = document.getElementById('emailinput');

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:3050/users');
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function() {
	    if (xhr.status === 200) {
	        //console.log(xhr.responseText);        
	        var responseObj = JSON.parse(xhr.responseText);
	        console.log(responseObj);
			//mainObj.innerHTML = xhr.responseText;
	    }
	    else {
	        console(xhr.status);
	    }
	};

	xhr.send(JSON.stringify({
		name: firstnameinputObj.value, 
		username : usernameinputObj.value,
		email: emailinputObj.value
	}));

}

addcommentbuttonObj.onclick = function() {
	var commentnameinputObj = document.getElementById('commentnameinput');
	var commentemailinputObj = document.getElementById('commentemailinput');
	var commentbodyinputObj = document.getElementById('commentbodyinput');

	// textarea? 
	// insert post here

}