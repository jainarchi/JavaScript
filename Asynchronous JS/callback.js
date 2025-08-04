// callback  - function which is passed inside anthor function which is invoked by the outer function to complete a task .


// function profileLekarAao (username , cb ) {    // this func send data in cb ie function(data)

//    setTimeout(() => {
//        cb({username , age:26 , prof:"instructor"})
//    }, 5000);

// }

// profileLekarAao("Harsh" , function(data){                // function(data)  - callback func 

//   console.log(data);
//   console.log(" ye code function ke data lane ke bad hi chalega ");

// })


function profileLekarAao(name, cb) {
    setTimeout(() => {
        cb({ name, id: 122, age: 26, prof: "instructor" })
    }, 2000);

}

function postLekarAao(id, post) {
    post({ count: 11 })
}

function noOfContactLekarAao(id, nofCont) {
    nofCont({ count: 100 })
}


profileLekarAao("Harsh", function (data) {
    console.log(data.name);

    postLekarAao(data.id, function (p) {                           // function( ) data le kar ajayega then control come here 
        console.log(p.count);

        noOfContactLekarAao(data.id, function (nofCont) {                  // every fun wait here to execute after above fun 
            console.log(nofCont.count);

        })

    });

});


//  it feels synchronous because each callback depends on the completion of the previous one. but it is asyn 
