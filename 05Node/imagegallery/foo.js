let images = [
    {id: 1, tags: ['tiger', 'animal', 'wild']},
    {id: 2, tags: ['zebra', 'animal', 'nice']},
    {id: 3, tags: ['ape', 'animal', 'jungle']},
    {id: 3, tags: ['ape', 'tiger', 'jungle']}
];

let searchPhrase = 'tig';
let resultImages = [];

for(let i=0; i<images.length; i++) {
    let tags = images[i].tags;
    for(let j=0; j<tags.length; j++) {
        if(new String(tags[j]).toLocaleLowerCase().includes(searchPhrase)) {
            resultImages.push( images[i] );
            break;
        }
    }
}

console.log( resultImages[0].tags );