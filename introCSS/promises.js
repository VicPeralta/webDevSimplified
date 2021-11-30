
let thePromise = getResult().then((amount) => console.log('success', amount))
    .catch((amount) => console.log('failure', amount));

let time = setTimeoutPromise(50).then(msg => {
    console.log('first timeout')
    console.log(msg);
    return setTimeoutPromise(100)
}).then(msg => {
    console.log('second timeout')
    console.log(msg);
}).catch(msg => console.log(msg));
function getResult() {
    return new Promise((resolve, reject) => {
        let success = false;
        if (success) resolve(100);
        else reject('no internet connection');
    });
}
doStuff();

function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) return reject('timeout must be greater than 0');
        setTimeout(() => { resolve(`You waited ${delay} milliseconds`) });
    }, delay);
}
async function doStuff() {
    try{
    console.log('doing stuff async')
    const msg1 = await setTimeoutPromise(500);
    console.log('first timeout');
    console.log(msg1);
    const msg2 = await setTimeoutPromise(-350);
    console.log('second timeout');
    console.log(msg2);}
    catch(msg){
        console.log('catching error ', msg);
    }
}