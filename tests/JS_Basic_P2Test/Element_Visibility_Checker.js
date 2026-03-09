let isPresent = true;
let isDisplayed = true;
let isEnabled = false;
if(isPresent === true && isDisplayed === true && isEnabled === true){
    console.log("STATUS:READY, Severity:OK Action: All True");
}else if(isPresent === true && isDisplayed === true && isEnabled === false){
    console.log("STATUS: DISABLED Severity:WARNING Action: Element is present and displayed but not enabled");}
    else if (isPresent && isEnabled && !isDisplayed){
        console.log("STATUS: HIDDEN Severity:INFO Action: Element is hidden");
    } else if(isPresent === false)
        {console.log("STATUS: NOT FOUND Severity:ERROR Action: Element is not present");}
        else {console.log("STATUS: UNKNOWN Severity:UNKNOWN Action: Unhandled combination of properties");}
        