// maps: key value data-structure

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer.');
question.set(false, 'Wrong, please try again.');

console.log(question.get('question'));
console.log(question.size);

question.delete(4);

if(question.has(5)) {
    question.delete(5);
}

// question.clear();

// question.forEach( (value, key) => {
//     console.log('value = ' + value + ', key = ' + key);
// });

for(let [key, value] of question.entries()) {
    // console.log('value = ' + value + ', key = ' + key);    
    if(typeof(key) === 'number') {
        console.log('answer ' + key + ': ' + value);
    }
}

const ans = parseInt(prompt('write the correct answer'));
console.log(question.get(ans === question.get('correct')));

