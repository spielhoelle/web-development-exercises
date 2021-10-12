const https = require('https');
const list = [
  'https://www.thoughtworks.com/careers/jobs',
  'https://digitalcareerinstitute.org/en/jobs/'
]
const terms = [
  'software developer',
  'software entwickler',
  'development'
]
for (let site of list) {
  console.log(site);
  https.get(site, (res) => {
    let rawData = '';
    res.on('data', (chunk) => {
      rawData += chunk;
    });
    res.on('end', () => {
      for (let term of terms) {
        const position = rawData.toLowerCase().indexOf(term)
        const string = rawData.slice(position - 15, position + term.length + 15)
        console.log(`Found something on ${site}: ${string}`);
      }
    });
  });
}
