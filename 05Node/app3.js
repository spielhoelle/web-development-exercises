var fs = require('fs');

/*
var buffer = fs.readFileSync('./halloworld.txt', 'utf8');
console.log( buffer );
var str1 = 'Hallo World to a new file\n';
fs.writeFileSync('newfile.txt', str1);
var str2 = 'This overwrites newfile.txt\n 123';
fs.writeFileSync('newfile.txt', str2);
var str3 = 'This will be appended to the file.\n';
fs.appendFileSync('newfile.txt', str3);

try {
	var objFromFile = JSON.parse(fs.readFileSync('./object2.json', 'utf8'));
	console.log( objFromFile.name );
} catch(e) {
	console.log('Something went wrong: ' + e);
}

var objFromFile2 = require('./object.json');
console.log('using require: ' + objFromFile2.name);

// task: a. take a look at the file import.csv and analyze it.
// 		 b. open the file with nodejs and store the information
//          in a proper javascript object.
//       c. save your object from b. as import.json

// ...

try {
	fs.unlinkSync('./deleteme');
}
catch(e) {
	console.log('File does not exist.')
}
*/
/*
var filelist = fs.readdirSync('.');

for(var i=0; i<filelist.length; i++) {
	console.log( filelist[i] );
}

console.log( 'number of files = ' + filelist.length);

var info1 = fs.lstatSync('./import.csv');
var info2 = fs.lstatSync('./level1');

if( info1.isFile() ) {
	console.log('import.csv is a file');
}
else {
	console.log('import.csv is a folder');
}

if( info2.isFile() ) {
	console.log('level1 is a file');
}
else {
	console.log('level1 is a folder');
}

// task: a.) show all JPEG images that are in the folder ./images
//  	 b.) be careful - delete all files that are not JPEG images
//           in ./images (avoid sudo ;-))
//  

var images = fs.readdirSync('./images');
console.log( images );
*/

/*
'/home/jan/Desktop/devugees_github/devugees/nodejs/images/image2.gif';
=
'./images/image2.gif';
*/

/*
for(var i=0;i<images.length;i++) {
	if( images[i].endsWith('.jpg') ) {
		console.log('file: ' + images[i]);
	}
	else {
	 	var path = './images/' + images[i]
		console.log('delete: ' + path);
		fs.unlinkSync( path );
	}
}
*/
/*

function f(x) {
	if(x === 0) {
		console.log('x is 0. the end.');		
	}
	else {
		console.log('x is ' + x);		
		f(x-1);
	}
}
*/

// f(5);

// Task:  

/*
function listFiles(path) {
	var list = fs.readdirSync( path );
	
	for(var i=0;i<list.length;i++) {
		var currentPath = path + '/' + list[i];
		var info = fs.lstatSync( currentPath );

		if( info.isFile() ) {
			console.log('file: ' + currentPath);
		}
		else if ( info.isDirectory()) {
			console.log('folder: ' + currentPath);
			listFiles( currentPath );
		}
	}
}

listFiles('.');

*/













