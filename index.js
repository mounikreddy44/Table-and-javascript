// Import stylesheets
import './style.css';
/*
1. Given values for acctData and balances below, write a function that returns only an array of account
numbers, and accepts the following optional parameters:
- user
- sortBy (accepts "acctNum" or "balance")
- sortDirection (accepts "asc" or "desc"; default to asc)
2. Execute your function and output the results as an array in console log for the following scenarios:
a) filtered by Bob
b) filtered by Charlie
c) sorted by acctNum
d) filtered by Alice; sorted by balance ascending
acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};
*/
const acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
const balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

const getAccountNumbers = (user=null, sortBy, sortDirection="asc") => {
   const userAccounts = user ? acctData.filter(account=>account.user === user) : acctData;
   const userAccountsWithBalance = userAccounts.map(account=>{
    return {...account, balance: balance[account.acctNum]};
   });
   if(sortBy === "acctNum"){
     userAccountsWithBalance.sort(function(a,b){  
       const first= a.acctNum.split(" ");
       const second = b.acctNum.split(" ");
       const compareValue = parseInt(first[first.length-1],10) -parseInt(second[second.length-1],10);       
       return sortDirection === "asc" ? compareValue : -compareValue;
    });
   } 
   if(sortBy === "balance"){
     userAccountsWithBalance.sort(function(a,b){  
       const compareValue = a.balance -b.balance;       
       return sortDirection === "asc" ? compareValue : -compareValue;
    });
   }    

   return userAccountsWithBalance.map(account=>account.acctNum);
}
console.log("1- Filtered by Bob");
console.log(getAccountNumbers('Bob'));
console.log("2- Filtered by Charlie");
console.log(getAccountNumbers('Charlie'));
console.log("3- sorted by acctNum");
console.log(getAccountNumbers(null,"acctNum"));
console.log("4- filtered by Alice; sorted by balance ascending");
console.log(getAccountNumbers('Alice',"balance","asc"));
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1></h1>`;