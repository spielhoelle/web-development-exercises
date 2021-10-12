
var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');
var mainObj = document.getElementById('main');
var addUserLinkObj = document.getElementById('adduserlink');
var addcommentlinkObj = document.getElementById('addcommentlink');
var adduserObj = document.getElementById('adduser');
var addcommentObj = document.getElementById('addcomment');
var adduserbuttonObj = document.getElementById('adduserbutton');
var addcommentbuttonObj = document.getElementById('addcommentbutton');

var users =[];
var comments =[];

function createUserTable( users ) 
{
    var tableObj = document.createElement('table');
    tableObj.classList.add('table');
    var htmlContent =`<thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead><tbody>`;
    tableObj.innerHTML +=htmlContent;
             
    
    //now we have to an object that we can use to create the user list in html.
    for(var i=0; i<users.length; i++)
    {
        var tableRowObj = document.createElement('tr');

		var j=1;
		for(key in users[i]) {
           
            var tableCellObj = document.createElement('td');
			tableCellObj.textContent = users[i][key];
			tableRowObj.appendChild( tableCellObj );

			if(j === 5)
				break;

			j++;
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}

addUserLinkObj.onclick = function() {

    console.log("Add user...");
	mainObj.innerHTML = '';
	adduserObj.style.display = 'block';
	addcommentObj.style.display = 'none';

}

userlinkObj.onclick = function() {

    console.log("Display users...");

    mainObj.innerHTML = '';
    
    if(localStorage.getItem('users'))
    {
        var usersJSON=localStorage.getItem('users');
        users=JSON.parse(usersJSON);
   

        var userTable = createUserTable( users);

        mainObj.appendChild( userTable );	

    adduserObj.style.display = 'none';
	addcommentObj.style.display = 'none';

    }

}

adduserbuttonObj.onclick = function() {

    console.log("Add user button clicked...");

	var firstnameinputObj = document.getElementById('firstnameinput');
	var usernameinputObj = document.getElementById('usernameinput');
	var emailinputObj = document.getElementById('emailinput');

	
	var params = {
        id: Math.floor(Math.random()*1000) +1,
		name: firstnameinputObj.value,
		username: usernameinputObj.value,
		email: emailinputObj.value
	};

    users.push(params);
    
    var usersJSON=JSON.stringify(users);
    localStorage.setItem('users',usersJSON);
    console.log("Successfully added...");
}

function createCommentTable( commentArray ) {
	var tableObj = document.createElement('table');

	for(var i=0; i<commentArray.length;i++) {
		var tableRowObj = document.createElement('tr');

        var j=1;
		for(key in commentArray[i]) {
			var tableCellObj = document.createElement('td');
			tableCellObj.textContent = commentArray[i][key];
            tableRowObj.appendChild( tableCellObj );
            
            if(j === 5)
				break;

			j++;
		}
		tableObj.appendChild( tableRowObj );
	}
	return tableObj;
}



commentslinkObj.onclick = function() {

    console.log("Display comments...");

	mainObj.innerHTML = '';

    if(localStorage.getItem('comments'))
    {
        var commentsJSON=localStorage.getItem('comments');
        comments=JSON.parse(commentsJSON);
   

        var commentTable = createUserTable(comments);

        mainObj.appendChild( commentTable );	

    adduserObj.style.display = 'none';
	addcommentObj.style.display = 'none';

    }

}



addcommentlinkObj.onclick = function() {

    console.log("Add comment...");

	mainObj.innerHTML = '';
	adduserObj.style.display = 'none';
	addcommentObj.style.display = 'block';
}



addcommentbuttonObj.onclick = function() {

    console.log("Add comment button clicked...");

	var commentnameinputObj = document.getElementById('commentnameinput');
	var commentmailinputObj = document.getElementById('commentmailinput');
	var commentbodyinputObj = document.getElementById('commentbodyinput');

	var params = {
        id: Math.floor(Math.random()*1000) +1,
		name: commentnameinputObj.value,
		email: commentmailinputObj.value,
		body: commentbodyinputObj.value
	};

	comments.push(params);
    
    var commentsJSON=JSON.stringify(comments);
    localStorage.setItem('comments',commentsJSON);
    console.log("Successfully added...");
}