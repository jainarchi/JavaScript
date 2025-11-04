// modular && Revealing  Pattern  -> 
// variable and functions inside the IIFE 
// return obj of functions which is access outside the IIFE

// diff : 
// modular  -> all public fun define in return obj 
// revealing modular fun- -> first make as private then ref them in return obj  




// revealing 
let Bank = (function(){
    let bal = 11000;

    function getBalance(){
        console.log(bal);
    }

    function setBalance(amt){
       bal = amt
    }

    function withdraw(amt){
        if(bal < amt){
            console.log('insufficient balance');
            return ;
        }
        bal -= amt ;
        console.log(`${amt} deducted. Remaining balance : ${bal}`);
    }

    return{                   // return object 
        getBalance,
        setBalance,
        withdraw
    }

})();

Bank.setBalance(48000);
Bank.getBalance();
Bank.withdraw(5000);


// standard Modular Pattern
let Bank2 = ( function (){
    let bal = 60000;
    
 return {
    getBal : function (){
        console.log(bal);   
    },

    setBal : function (balance){
       bal = balance ;
    
    }
 }
})();

Bank2.getBal();
Bank2.setBal(5000);
Bank2.getBal()






