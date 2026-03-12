const fs = require('fs');

fs.readFile('a.txt', 'utf8', function(err,data) { //async call
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

console.log("hi there");

let a = 0;
for (let i = 0; i < 10000; i++){
    a ++;
}

console.log("hi there 2");