const accountId = 12345;
let accountName = "abc";
var accountCity = "Chhapra";

accountPurpose = "Learning"; //this is also a variable but not good
let accountState; //gives undefined because its empty

//accountId = 213; //Not Allowed because const variable is constant
console.log(accountId);

console.table([accountName, accountCity, accountPurpose, accountState]);