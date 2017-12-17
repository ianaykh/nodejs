const https = require('https');

https.get("https://jsonplaceholder.typicode.com/photos",function(res){

let body ="";
res.setEncoding("utf8");
res.on("data",function(data){

    body = data;

});


res.on("end",function(){

//    let jbody = JSON.parse(body);
    // console.log(body);
    
   for(var item in body){
       if(item.hasOwnProperty >= 4999){
           console.log(item);
       }
   }
    

});

});
