function myBlock() {
    var i = 2;

    function myChildBlock() {
        console.log( i );
    }

    myChildBlock();
}

myBlock();

// console.log(i);

// anonymous blocks

for(let j=0;j<10;j++) {}

let j = 1;
let k = 10;

for(;j<k;j++) {
    console.log(j);
}
console.log( j );


