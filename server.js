const express=require('express');
const app = express();

app.get('/',function(req,res){
   res.send('Hello World demo to integration of GIT-Jenkins-Docker')
})

const port = process.env.port || 3500;
app.listen(port,function(){
   console.log("server is up and running at port 3500")
})

