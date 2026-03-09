const test = require("node:test");

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passCount = 0;
let failCount = 0;
let skipCount = 0;
let pass_rate;
 let Tot_test = testResults.length;
   console.log("Total Test:", Tot_test);
for(let i=0; i<testResults.length; i++){
    {let result = testResults[i];
    if(result === "pass"){
        passCount++;
    } else if(result === "fail"){
        failCount++;
    } else if(result === "skip"){
        skipCount++;
    }}}
    console.log("Passed:", passCount);
    console.log("Failed:", failCount);
    console.log("Skipped:", skipCount);
 pass_rate= (passCount / Tot_test) * 100;
 console.log("Pass Rate:",pass_rate + "%");
 if(pass_rate == 100){console.log("VERDICT: All passed->Ready for release");}
 else if(failCount<=2){console.log("VERDICT: Minor failures. Review before release.");}
    else if(failCount >2){console.log("VERDICT: Block Release.");}
