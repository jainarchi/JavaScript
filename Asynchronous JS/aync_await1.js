console.log('asyncrous and Await keyword     better than     promise.then() - uses callback');
// await always used inside async function

async function getData() {        // asyn - asyn task - run in bg 

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);

        }, 4000);
    })



}

async function main() {
    console.log("start");
    console.log("welcome to our site ");

    // let data = getData();     promise return hogi - pending 


    let data = await getData();    // async task complete hone ka wait hoga, async -await is same as promise.then    

    console.log(data);

    console.log("process data ");


    console.log("Thank you !");

    
let a = 3;

let p = new Promise((res, rej) => {

    if (a < 5) {
        setTimeout(() => {
            console.log("successfully settled ");
            res("resolved")

        }, 3000)
    }
    else {
        rej("rejected ")

    }

})
    .then((res) => {    // promise ke settled hone ke bad hi then ya catch chlta h same as asyn await 
        console.log(res);

    })
    .catch((err) => {
        console.log(err);

    })


}

main();

 
