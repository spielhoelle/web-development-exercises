var fs = require('fs');

var line = 'ksdjfsdöklgjdlsjgljsgölktxvdökljvdflövdlöfjbldfjghlfdgjhfgljhfögljhfgljhfg';
var numLines = 50000000;

for(var i=0; i<numLines; i++) {
	fs.appendFileSync('bigfile.txt', line);
}



