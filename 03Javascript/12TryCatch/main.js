// try, catch, finally

// 1

// console.log('try block starts here');
// idontexist;
// console.log('never reached');

try {
    console.log('try block starts here');

    idontexist;

    console.log('never reached');
}
catch(e) {
    console.log('something went wrong: ' + e.stack);
}
finally {
    // semantically, this is used for cleaning up a connection, close a file etc.
    console.log('this always runs');
    // task: what is finally used for?
}

console.log('this is always executed');

// 2
let json = '{"age": 33}';
try {
    let user = JSON.parse(json);
    if(!user.name) {
        throw new SyntaxError('Incomplete data: no name');
    }
}
catch(e) {
    console.log('JSON Error: ' + e.message);
}

// 3
function doSomething(x) {
    if(x > 5) {
        throw 'Ooops, something wrong';
    }

    console.log('x is less or equal to 5, all good!');
    return true;
}

try {
    doSomething(4);
}
catch(e) {
    console.log(e);
}

// 4
function doSomethingAgain() {
    doSomething(6);
}

// try {
//     doSomethingAgain();
// }
// catch(e) {
//     console.log(e);
// }

// 5
function doSomethingAgainAndAgain() {
    doSomethingAgain();
}

try {
    doSomethingAgainAndAgain();
}
catch(e) {
    console.log(e);
}
