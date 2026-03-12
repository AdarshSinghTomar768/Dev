const { resolve } = require('dns');
const fs = require('fs');

// my own async function
function adarshsReadFile(){ 
    console.log("Inside adarshsReadFile function");
    return new Promise(function(resolve){
        console.log("Inside promise");
        fs.readFile('a.txt', 'utf8', function(err,data) { //async call
            console.log("before resolve");
            resolve(data);
        });
    });
}

function onData(data){
    console.log(data);
}

adarshsReadFile().then(onData);

//Inside adarshsReadFile function
//Inside promise
//before resolve
//Hi there from a.txt
