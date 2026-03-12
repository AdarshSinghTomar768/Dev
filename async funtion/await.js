function adarshsReadFile(){
    let p = new Promise(function(resolve){
        // do some async work, and then call resolve
        setTimeout(function(){
            resolve("Hi there");
        }, 2000);
    });
    return p;
}

async function main(){
    // no callback, no .then, just await
    let value = await adarshsReadFile();
    console.log("hi there 1");
    console.log(value);
}

main();
console.log("after main")