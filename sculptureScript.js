const fs = require('fs');
const sculptureList = require('./data.js'); // import data.js

// const element = sculptureList[1] // <---- comment out this line in your solution!
// // this following snippet is just to show how to iterate an object's keys
// // comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

//if you want the number of element to be printed frist then use the {} or
//uncoment this
//const sculptureListLengths = {};
//example output 

//  '0': { name: 26, artist: 20, description: 198, url: 31, alt: 90 },
const sculptureListLengths = [];

//otherwise
//  { name: 26, artist: 20, description: 198, url: 31, alt: 90 },

sculptureList.forEach((sculpture, index) => {
    sculptureListLengths[index] = Object.assign({}, {
        name: sculpture.name.length,
        artist: sculpture.artist.length,
        description: sculpture.description.length,
        url: sculpture.url.length,
        alt: sculpture.alt.length
    });
});

const output = `Sculpture List Lengths \n${JSON.stringify(sculptureListLengths, null, 2)}`;
fs.writeFileSync('README.md', output, 'utf8');

//console.log(sculptureListLengths[0]); 
console.log(sculptureListLengths); 