--MAIN2.JS

console.log('hallo world');

/*
!! Find a template !!

1. Hello World 
2. Hello World, $NAME from textbox
                Today it is Tuesday, September 5th 2017

var greeting = document.getElementById('greeting');
greeting.innerHtml = 'Hallo World';
*/

// why does js not find the element?

var greetingObj = document.getElementById('greeting');
greetingObj.innerHTML = 'hallo world';

var saymynameObj = document.getElementById('saymyname');

saymynameObj.onclick = function() {
	// get the text from the text box
	var firstnameObj = document.getElementById('firstname');
	var firstname = firstnameObj.value;

	greetingObj.innerHTML = 'hallo ' + firstname;	
	var thedateObj = document.getElementById('thedate');

	thedateObj.innerHTML = 'I wish you a nice ' + getDayName()[0] + '.'
						 + 'Only ' + getDayName()[1] + ' days left to the weekend';
	// task, use 
	// var date = new Date();
	// var day = date.getDay(); 
	// to write getDayName
	function getDayName(  ) {
		var days = ['Monday', 		
					'Tuesday', 		
					'Wednesday', 
					'Thursday', 
					'Friday', 
					'Saturday',
					'Sunday'];

		var date = new Date();
		var day = date.getDay();
		return [days[day - 1], 5 - day];
	}
}

var addgiftObj = document.getElementById('addgift');

var basket = [];
if(sessionStorage.getItem('basket') !== null) {
	basket = JSON.parse(sessionStorage.getItem('basket'));
}

addgiftObj.onclick = function() {
	var giftObj = document.getElementById('gift');
	var gift = giftObj.value;

	var shoppinglistObj = document.getElementById('shoppinglist');
	var newgiftObj = document.createElement('li');
	newgiftObj.innerHTML = gift;
	shoppinglistObj.appendChild(newgiftObj);

	basket.push({ name: gift, price: randomNumber(100) });

	var stringBasket = JSON.stringify(basket);
	sessionStorage.setItem('basket', stringBasket);

	function randomNumber( max ) {
		return Math.round(Math.random() * max, 0);
	}		

	// task, clear the textbox
	giftObj.value = '';
}

var removelastgiftObj = document.getElementById('removelastgift');
removelastgiftObj.onclick = function() {
	var allgiftsObj = document.querySelectorAll('#shoppinglist > li');
	allgiftsObj[allgiftsObj.length - 1].remove();
}

var removefirstgiftObj = document.getElementById('removefirstgift');
removefirstgiftObj.onclick = function() {
	var allgiftsObj = document.querySelectorAll('#shoppinglist > li');
	allgiftsObj[0].remove();
}

// task
var removeObj = document.getElementById('remove');
removeObj.onclick = function() {
	var allgiftsObj = document.querySelectorAll('#shoppinglist > li');
	var giftObj = document.getElementById('gift');
	var gift = giftObj.value;

	for(var i=0; i<allgiftsObj.length; i++) {
		var deleteGift = allgiftsObj[i].innerHTML;

		if(gift === deleteGift) {
			allgiftsObj[i].remove();
			break;	
		}
	}
	if(i === allgiftsObj.length)
		alert('Gift ' + gift + ' not found');
}

var sumObj = document.getElementById('sum');
sumObj.onclick = function() {
	var sum = 0;

	for(var i=0; i<basket.length; i++) {
		sum += basket[i].price;
	}

	alert('total sum = ' + sum);
}



/*
Shopping List
3. $ITEM from textbox add item button
4. remove last item
5. remove first item
6. remove item with $ITEM from textbox
7. add price field to 3.
8. add button sum() that sums up the total 
   amount and prints it out in a div

DataTable
9. Given is an object 
   statistic = {
       dates: [
       		'2016-01-01', 
       		'2016-01-02', 
       		'2016-01-03', 
       		'2016-01-05',
       		'2016-01-06',
       		'2016-01-07',
       		'2016-01-08',
       		'2016-01-09'
       	],
       	visitors: [
       		1304,
       		1604,
       		1483,
       		1903,
       		1712,
       		2034,
       		1515,
       		1812
       	]
   }

9.1 create a table using the div tag
*/


function generateZeroTable(rows, columns) {
	var tableObj = document.createElement('table');	
	for(var i=0; i<rows; i++) {
		var tableRowObj = document.createElement('tr');
		for(var j=0; j<columns; j++) {
			var tableColumnObj = document.createElement('td');
			tableColumnObj.innerHTML = "0";
			tableRowObj.appendChild(tableColumnObj);
		}
		tableObj.appendChild( tableRowObj );
	}

	return tableObj;
}

var bodyObj = document.getElementsByTagName('body')[0];
bodyObj.appendChild( generateZeroTable(3, 4) );

var statistic = [
	['2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05',
	 '2016-01-06', '2016-01-07', '2016-01-08', '2016-01-09'],
	[ 1304, 1604, 1483, 1903, 1712, 2034, 1515, 1812, 1020 ]
];

function generateDataTable( array ) {
	var tableObj = document.createElement('table');
	if(array[0].length !== array[1].length) 
		return tableObj;

	for(var i=0; i<array.length; i++) {
		var tableRowObj = document.createElement('tr');			
		for(var j=0; j<array[0].length; j++) {
			var tableColumnObj = document.createElement('td');
			tableColumnObj.innerHTML = array[i][j];
			tableRowObj.appendChild(tableColumnObj);
		}
		tableObj.appendChild( tableRowObj );
	}

	return tableObj;
}

bodyObj.appendChild(generateDataTable(statistic));

function sayHello(callback) {
	console.log('Hallo ');
	callback();
}

function sayWorld() {
	console.log('World');
}

var i=0;
// setInterval( function() { i++; console.log('foobar' + i); } , 300 );

/*
var oReq = new XMLHttpRequest();
oReq.onload = function (e) {
    results.innerHTML = e.target.response.message;
};
oReq.open('GET', e.target.dataset.url + '?' + new Date().getTime(), true);
oReq.responseType = 'json';
oReq.send();
*/

var userlinkObj = document.getElementById('userlink');
var commentslinkObj = document.getElementById('commentslink');



var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (xhr.status === 200) {
        //console.log(xhr.responseText);        
        var responseObj = JSON.parse(xhr.responseText);
        console.log(responseObj);
    }
    else {
        console(xhr.status);
    }
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();


--
-- index2.html
--


<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Your page title here :)</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">
</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <a id="userlink">Users</a>
      <a id="commentslink">Users</a>
    </div>
    <div class="row">        
        <h4 id="greeting">Hallo Devugees</h4>
        <p id="thedate">How are you?</p>
        <p>
          <input type="text" id="firstname"/>
          <button id="saymyname">say hallo</button>
        </p>

        <p>
          <ul>
            <li class="linklist1">
                <a href="http://www.google.de">link 1</a>
                <ul>
                  <li><a href="http://www.google.de">link 1_1</a></li>
                  <li><a href="http://www.google.de">link 1_2</a></li>
                  <li><a href="http://www.google.de">link 1_3</a></li>
                </ul>
            </li>
            <li class="linklist1"><a href="http://www.google.de">link 2</a></li>
            <li class="linklist1"><a href="http://www.google.de">link 3</a></li>
          </ul>
        </p>

        <p>
          <div id="somediv">
            
          </div>
        </p>

        <p>
          <input type="text" id="gift"/>
          <button id="addgift">add to basket</button>
          <button id="removelastgift">remove last</button>
          <button id="removefirstgift">remove first</button>
          <button id="remove">remove</button>
          <button id="sum">sum</button>
          <ul id="shoppinglist">
          </ul>
        </p>      

    </div>
  </div>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script type="text/javascript" src="main2.js"></script>
</body>
</html>

--
-- MAIN.JS
--

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

--
--
--index.html


<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Your page title here :)</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">
</head>
<body>

  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <a class="navlinks" id="userlink">Users</a> | 
      <a class="navlinks" id="commentslink">Comments</a> | 
      <a class="navlinks" id="adduserlink">Add User</a> |   
      <a class="navlinks" id="addcommentlink">Add Comment</a> 
    </div>
    <div id="main" class="row">
    </div>
    <div id="adduser" class="row" style="display: none">
      <input type="text" id="firstnameinput" placeholder="firstname"/></br>
      <input type="text" id="usernameinput" placeholder="username"/></br>
      <input type="text" id="emailinput" placeholder="email address"/><br>
      <button id="adduserbutton">Add User</button>
    </div>
    <div id="addcomment" class="row" style="display: none">
      <input type="text" id="commentnameinput" placeholder="firstname"/></br>
      <input type="text" id="commentemailinput" placeholder="username"/></br>
      <textarea id="commentbodyinput" placeholder="A nice comment"></textarea><br>
      <button id="addcommentbutton">Add Comment</button>
    </div>    
  </div>

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <script type="text/javascript" src="main.js"></script>
</body>
</html>




