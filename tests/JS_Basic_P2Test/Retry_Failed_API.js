let MAX_ATTEMPTS = 0;
do{
    
    if (Math.random(MAX_ATTEMPTS)>0.6)
    {console.log("API call successful");
    break;}
    MAX_ATTEMPTS++;
}while(MAX_ATTEMPTS<=5);
