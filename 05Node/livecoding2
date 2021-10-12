var fs = require('fs');

var buffer = fs.readFileSync('./halloworld.txt', 'utf8');

console.log( buffer );

var str1 = "Hallo World to a new file\n";

fs.writeFileSync('newfile.txt', str1);

var str2 = "This overwrites newfile.txt\n";

fs.writeFileSync('newfile.txt', str2);

var str3 = "This will be appended\n";

fs.appendFileSync('newfile.txt', str3);

// without try
var objFromFile = JSON.parse(fs.readFileSync('./object.json', 'utf8'));
console.log( objFromFile.name );	

// include try here
try {
	var objFromFile = JSON.parse(fs.readFileSync('./objefct.json', 'utf8'));
	console.log( objFromFile.name );	
}
catch(e) {
	console.log('file does not exist');
}

var objFromFile2 = require('./object.json');

console.log('using require: ' + objFromFile2.name);

// task: a. Take a look at the file import.csv and analyze it.
//       b. Open the file and store the information in a proper
//          JavaScript object.
//       c. Save your object from b. as import.json

try {
	fs.unlinkSync('./deleteme');
}
catch(e) {

}

var filelist = fs.readdirSync('.');

for(var i=0;i<filelist.length;i++) {
	console.log(filelist[i]);
}

var info1 = fs.lstatSync('./import.csv');
var info2 = fs.lstatSync('./level1');

if(info1.isFile())
	console.log('import.csv is a file');
else
	console.log('import.csv is a folder');

if(info2.isFile())
	console.log('level1 is a file');
else
	console.log('level2 is a folder');

// task: a. show all JPEG images that are in the folder ./images
//       b. delete all files that are not JPEG in ./images
//          (be careful)

// [start with recursion]


function sum(x) {
	if(x===0) 
		return x;
	else
		return x + sum(x-1);
}


function listFiles(path) {
	console.log('path='+path);
	var list = fs.readdirSync(path);

	for(var i=0;i<list.length;i++) {
		var fullpath = path + '/' + list[i];		
		var info = fs.lstatSync(fullpath);
		
		if(info.isFile()) {
			console.log('file: ' + fullpath);
		}
		else {
			console.log('folder: ' + fullpath);			
			listFiles(fullpath);
		}
	}
}

listFiles('.');

console.log(sum(5));