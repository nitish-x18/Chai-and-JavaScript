// Immediately Invoked Function Expressions (IIFE)

// NAMED IIFE-->
(function chai(){
    console.log(`DB CONNECTED`);
})();

// SIMPLE IIFE-->
( () => {
    console.log(`SECOND DB CONNECTED`);
})();

// PARAMETERISED IIFE-->
( (name) => {
    console.log(`DB CONNECTED BY, ${name}`);
})('Nitish');