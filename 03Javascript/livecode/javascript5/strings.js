let firstName = 'John';
let lastName = 'Smith';

const n = `
    ${firstName} ${lastName}
`;

console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName}`.repeat(5));
console.log(`
    Hey whats up
`.replace('Hey', 'Hi'));
