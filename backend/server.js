import express from 'express';
 const app=express();
//  app.get('/',(req,res)=>{
//     res.send("Ram Ram");
//  });
app.get('/api/jokes',(req,res)=>{
          const joke=[
            {
                id:1,
                title:'Number 1 joke',
                content:'content of joke 1'
            },
            {
                id:2,
                title:'Number 2 joke',
                content:'content of joke 2'
            },
            {
                id:3,
                title:'Number 3 joke',
                content:'content of joke 3'
            },
            {
                id:4,
                title:'Number 4 joke',
                content:'content of joke 4'
            },
            {
                id:5,
                title:'Number 5 joke',
                content:'content of joke 5'
            }
           
          ]
          res.send(joke);
})
 const port=process.env.PORT||4000;
 app.listen(port,()=>{
         console.log(`Ram SIYA Ram ${port}`);
 })