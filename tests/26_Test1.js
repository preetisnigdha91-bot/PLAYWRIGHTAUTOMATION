let grade= 70; 
if (grade >= 90 && grade <= 100) {
    console.log("Grade is A");
} else if (grade >= 80 && grade < 90) {
    console.log("Grade is B");
} else if (grade >= 70 && grade < 80) {
    console.log("Grade is C");
} else if (grade >= 60 && grade < 70) {
    console.log("Grade is D");
} else {
    console.log("Grade is F");
}
/*************************/

let number = 15;
if (number%3===0 && number%5===0)
{console.log("FizzBuzz");
}else if (number%3===0)
{console.log("Fizz");
}else if (number%5===0)
{console.log("Buzz");
}