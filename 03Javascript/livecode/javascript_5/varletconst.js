for(var i1=0; i1<10; i1++) {
    console.log( i1 );
}

console.log('i1 after loop: ' + i1);

function counter() {
    for(var i2=0;i2<10;i2++) {
        console.log(i2);
    }
}

// console.log('k after the loop ' + k);

// conditional block
if(true)
{
    var i3 = 2;
}

console.log('i3: ' + i3);

// anonymous block
{
    var i4 = 3;
}

console.log('i4: ' + i4);

{
    let i5 = 5;
}

// console.log('i5: ' + i5);

if(true) {
    let i6 = 8;
}

// console.log('i6: ' + i6);
for(let i7=0;i7<10;i7++) {
    console.log(i7);
}

// console.log(i7);

// difference between const and var, let

var i8 = 10;
i8 = 15;

console.log(i8);

const i9 = 20;
// i9 = 25;

{
    const i10 = -1;
}
// creates a block scope
console.log(i10);

// expressions as arguments

