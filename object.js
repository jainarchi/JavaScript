// object - key val pair 
// . & [] structure 
// nesting & deep access & destru
// for in loop , Object.keys ,  Objects.entries 
// spread , object assign , deep clone 
// optional chaining & cumputed property

let object = {}  // blank obj
console.log(object);


const o = {
    name : 'archi jain',
    age : 21 ,
    id : 45 ,
}

let aa = "name" ;
console.log(o.aa);       // undef   it try to find aa in o
console.log(o[aa]);      // aa ki val name then it find o.name in o



const user = {
   "full-name": 'Archi jain',
    age : 21 ,
    id : 45 ,
    location :{
        state : 'mp',
        "city-bpl" : "bhopal",
       loc : {          
        lat : 34.2 ,
        log : 76.1,
       },
    },
}

let l = user.location.loc.log ;
console.log(l);

let {log , lat} = user.location.loc ;   // destructing   same name 
// log = 10 ;  variable 


let {"city-bpl" : city} = user.location;   // city-bpl property ki val lekar ao or city wale variable rakhdo
console.log(city);

let {"full-name" : name} = user;
console.log(name);


// for in - key in object 
for( let key in user ){
    console.log(key  + " -> " + user[key]);       // user.key -  wrong
    
}

console.log(Object.keys(user));       // return  arr of keys 
console.log(Object.entries(user));        // give arr of arr 


// que - key can be boolean or number ?  yes 

let u = {
    name : "harsh",
    true : "yes",
    42 : "number",
}

console.log(u.true );


// let user2 = {...user}       // clone but  prob - nested object wale ref pass krne lagte h
// user2.age = 12 
// user2.location.state = "UP";      // ref 

// console.log(user2);
// console.log(user);



let customer = JSON.parse( JSON.stringify(user)) // deep cloning 

customer.location.state = "UP"

console.log(user);
console.log(customer);   



// Optional chaining  - prevent err 

// console.log(user.locations.loc.lat);  // Cannot read properties of undefined  loc d    error 

console.log(user?.locations?.loc?.lat );   // no err  undef 


// computed property 

let key = 'role' ;

let person ={
    name : "Harsh" ,
    age : 26 ,
    [key] : "admin",
}

person.id = 789797;
console.log(person);

console.log(person.role);  


