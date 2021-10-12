function f1(a, obj) {
    let b = obj.b;
    let c = obj.c;
    console.log('hi ', a, b, c)
}

function f2(a, {b, c}) {
    console.log('hi ', a, b, c);
}

foo(a, { b:1, c: 2 });