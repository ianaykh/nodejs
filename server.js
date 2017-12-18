const https = require('https');

https.get("https://jsonplaceholder.typicode.com/photos",function(res){

let body ='';

// convert buffer chunks to strings 
res.on("data",function(data){

    body += data;

});


res.on("end",function(){

   var obj = JSON.parse(body);
    console.log(obj);


    for(var item in obj){
            console.log(obj[item]);
    }




    
    
   
    

});

});
