let a = 10;
let b= 20; 
let c= 30;
if (a !== b && b!== c && a !== c) {
    console.log ("Its a scalene triangle")}
    else if (a === b && b === c) {
        console.log("Its an equilateral triangle");}
    else if (a === b || b === c || a === c) {
        console.log("Its an isosceles triangle");}
        else {
            console.log("Not a triangle");
        }
/*********** LEAP Year*********/
let year = 2021;
if (( year %4 ==0 && year %100 != 0) || (year % 400 ==0)){
    console.log ("Its a leap year");}
    else { console.log("Not a leap year");}
     
    