// async function getUsers (){                               // asyn func always return promise 
//     return new Promise (( res , rej) => {                // Async but not Promise-based  that's why return promise 
//          setTimeout(() => {
//             res("resolved req -  users Provided ")

//          }, 3000);
//     })
// }


async function getDetails() {

    // try {                                                                    // fetch api -  asyn && promise based 
    //     let raw = await fetch("https://api.restful-api.dev/objects")
    //     let data = await raw.json();
    //      return data ;

    // } catch (err) {
    //   return err ;

    // }

    return fetch("https://api.restful-api.dev/objects")
        .then((raw) => raw.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            return err
        })

}



async function main() {

    console.log("open site ");
    console.log("req uses ");

    // let data = await getUsers();
    // console.log(data);


    let data = await getDetails();
    console.log(data);


    console.log("view details ");
    console.log("close site");


}
main();



