async function getData() {         // asyn fun always ret a promise 

   return new Promise ((res , rej) =>{

     setTimeout(() => {
        console.log("data received ");
        res("resolved")

    }, 3000);

   })
}

async function main() {
    console.log("user open the site ")
    console.log("req for data ");

    let data = await getData();
    console.log(data);


    console.log("view details ");
    console.log("close the site ");

}

console.log(main());


