
const express = require('express');
const app = express()
app.use(express.json())
const { MongoClient } = require('mongodb');

 function main() {
    
    
   //   app.listen(process.env.PORT || port, () => {
    app.listen(3500, () => {
    console.log('app listening on port 3500');
    app.use('/auth',function(req, res, next){
      const uri = "";
      const client = new MongoClient(uri);
      console.log("Received New Request for AUTH :")
      console.log(req.query.u);
      console.log(req.query.p);
          
          login(res,client,req.query.u,req.query.p);
          setTimeout(next,1000);
   });
   app.use('/GetEvents',function(req, res, next){
    const uri = "";
    const client = new MongoClient(uri);
    console.log("Received New Request FOR GET EVENTS :")
    console.log(req.query.u);
    console.log(req.query.p);
        
        getEvents(res,client,req.query.u,req.query.p);
        setTimeout(next,1000);
 });
 app.use('/UpdateEvents',function(req, res, next){
   const uri = "";
   const client = new MongoClient(uri);
   console.log("Received New Request FOR UPDATE EVENTS:")
   console.log(req.query.u);
   console.log(req.query.p);
       
       UpdateEvents(req,res,client);
       setTimeout(next,1000);
});

app.use('/EditEvents',function(req, res, next){
   const uri = "";
   const client = new MongoClient(uri);
   console.log("Received New Request FOR UPDATE EVENTS:")
   console.log(req.query.u);
   console.log(req.query.p);
       
       EditEvents(req,res,client);
       setTimeout(next,1000);
});
     app.use('/', function(req, res, next){
      const uri = "";
      const client = new MongoClient(uri);
      console.log("Received New Request :")
      console.log(req.query.u);
      console.log(req.query.p);
      
         
          login(res,client,req.query.u,req.query.p);
          setTimeout(next,1000);
     });} );

     app.use('/EmptyClass',function(req, res, next){
      const uri = "";
      const client = new MongoClient(uri);
      console.log("Received New Request FOR UPDATE EVENTS:")
      console.log(req.query.u);
      console.log(req.query.p);
          
          EmptyClass(req,res,client);
          setTimeout(next,1000);
   });
   app.use('/SignUp',function(req, res, next){
      const uri = "";
      const client = new MongoClient(uri);
      console.log("Received New Request FOR UPDATE EVENTS:")
      console.log(req.query.u);
      console.log(req.query.p);
          
          SignUp(req,res,client);
          setTimeout(next,1000);
   });
   app.use('/CabShare',function(req, res, next){
      const uri = "";
      const client = new MongoClient(uri);
      console.log("Received New Request FOR UPDATE EVENTS:")
      console.log(req.query.u);
      console.log(req.query.p);
          
          SignUp(req,res,client);
          setTimeout(next,1000);
   });
    
 }
 async function login(res,client,uname,pwd)
 {
    
    try {
        
        await client.connect();
        const result = await client.db("test").collection("users").find({user:uname,pwd:pwd});
 
     if (result) {
        //  console.log(`Results Retrieved !!`);
         const cursor = client.db("test").collection("users").find({user:uname,pwd:pwd});
        const results = await cursor.toArray();
        
     if (results.length > 0) {
        //  console.log(`List of Users`);
         results.forEach((result, i) => {
            //  console.log(result.user);
            //  console.log(result.pwd);
             console.log(JSON.stringify({user:result.user,pwd:result.pwd}));
             try{
               res.header("Access-Control-Allow-Origin","*");
               res.status(200);
             res.json({status:"approved"});
             }catch(e){}
         });
         
         
     } else {
        console.log("denied!!!");
        try{
         res.header("Access-Control-Allow-Origin","*");
         res.status(200);
        res.json({status:"denied"});
        }catch(e){}
     }
     } else {
        console.log(`No listings found with the name `);
     }
    } finally {
        await client.close();
    }
 }

 async function UpdateEvents(req,res,client)
 {
    
    try {
        console.log("Inside Update Events!!!!");

        await client.connect();
        const result = await client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
 
     if (result) {

         
         //  console.log(`Results Retrieved !!`);
                  const cursor = client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
                  const results = await cursor.toArray();
                  var events='';
                  
               if (results.length>0) 
               {
                  console.log("Getting Results!!!");
                  const event = {Id:req.query.Id,Subject:req.query.Subject,
                  StartTime:req.query.StartTime,EndTime:req.query.EndTime,
               Location:req.query.Location,Description:req.query.Description};
                  // console.log(JSON.stringify(event));
                  
                  //  console.log(`List of Users`);
                     results.forEach((result, i) => {
                        //  console.log(result.user);
                        //  console.log(result.pwd);
                        if(result.events=='')
                        {
                           events = result.events+JSON.stringify(event);
                        }
                        else
                         events = result.events+"\n"+JSON.stringify(event);
                     });
                           const result1 = await client.db("test").collection("users").updateOne({user:req.query.u,pwd:req.query.p}, { $set: {events:events} });
                           if(result1)
                           {
                              try{
                                 res.header("Access-Control-Allow-Origin","*");
                                 res.status(200);
                                 res.json({status:"Success"});
                              }catch(e){}
                           }
                           else
                           {
                              try{
                              res.header("Access-Control-Allow-Origin","*");
                                 res.status(200);
                                 res.json({status:"Failure"});
                              }catch(e){}
                           }
                        
               
                     }
                     
                     
               else {
                  console.log("denied!!!");
                  try{
                     res.header("Access-Control-Allow-Origin","*");
                     res.status(200);
                  res.json({status:"denied"});
                  }catch(e){}
               }

         

     } else {
        console.log(`No listings found with the name `);
     }
    } finally {
        await client.close();
    }
 }


 async function EditEvents(req,res,client)
 {
    
    try {
        console.log("Inside Update Events!!!!");

        await client.connect();
        const result = await client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
 
     if (result) {

         
         //  console.log(`Results Retrieved !!`);
                  const cursor = client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
                  const results = await cursor.toArray();
                  var events='';
                  
               if (results.length>0) 
               {
                  console.log("Getting Results!!!");
                  const event = {Id:req.query.Id,Subject:req.query.Subject,
                  StartTime:req.query.StartTime,EndTime:req.query.EndTime,
               Location:req.query.Location,Description:req.query.Description};
                  // console.log(JSON.stringify(event));
                  
                  //  console.log(`List of Users`);
                     results.forEach((result, i) => {
                        //  console.log(result.user);
                        //  console.log(result.pwd);
                        var strLines = result.events.split("\n");
      // console.log(strLines)
                        var out='';

                        for (var i in strLines) 
                        {
                           var obj = JSON.parse(strLines[i]);
                           if(obj.Id==event.Id)
                           {
                              strLines[i]=JSON.stringify(event);
                           }
                           out+=strLines[i];
                        }

                        console.log(out);
                        
                         
                     });
                          
                     }
                     
                     
               else {
                  console.log("denied!!!");
                  try{
                     res.header("Access-Control-Allow-Origin","*");
                     res.status(200);
                  res.json({status:"denied"});
                  }catch(e){}
               }

         

     } else {
        console.log(`No listings found with the name `);
     }
    } finally {
        await client.close();
    }
 }

 async function DeleteEvents(req,res,client)
 {
    
    try {
        console.log("Inside Update Events!!!!");

        await client.connect();
        const result = await client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
 
     if (result) {

         
         //  console.log(`Results Retrieved !!`);
                  const cursor = client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
                  const results = await cursor.toArray();
                  const id = req.query.id;
                  
               if (results.length>0) 
               {
                  console.log("Getting Results!!!");
                  
                  
                  //  console.log(`List of Users`);
                     results.forEach((result, i) => {
                        //  console.log(result.user);
                        //  console.log(result.pwd);
                        var strLines = result.events.split("\n");
      // console.log(strLines)
                        var out='';

                        for (var i in strLines) 
                        {
                           var obj = JSON.parse(strLines[i]);
                           if(obj.Id!=id)
                           {
                              out+=strLines[i];
                           }
                           
                        }

                        console.log(out);
                        
                         
                     });
                      
                        
               
                     }
                     
                     
               else {
                  console.log("denied!!!");
                  try{
                     res.header("Access-Control-Allow-Origin","*");
                     res.status(200);
                  res.json({status:"denied"});
                  }catch(e){}
               }

         

     } else {
        console.log(`No listings found with the name `);
     }
    } finally {
        await client.close();
    }
 }

 async function getEvents(res,client,uname,pwd)
 {
   var user="";
   var pass="";
   var events="";
   var cabShare="";
    
    try {
        await client.connect();
        const result = await client.db("test").collection("users").find({user:uname,pwd:pwd});
        const result2 = await client.db("test").collection("cabShare").find({auth:"cab"});
     if (result&&result2) 
     {
      
      
        //  console.log(`Results Retrieved !!`);
         const cursor = client.db("test").collection("users").find({user:uname,pwd:pwd});
        const results = await cursor.toArray();
        const cursor2=client.db("test").collection("cabShare").find({auth:"cab"});
        const results2 = await cursor2.toArray();
        
     if (results.length === 1&&results2.length===1) {
        //  console.log(`List of Users`);
         results.forEach((result, i) => {
            //  console.log(result.user);
            //  console.log(result.pwd);
             console.log(JSON.stringify({user:result.user,pwd:result.pwd,events:result.events}));
             user=result.user;
             pass=result.pass;
             
         });
         results2.forEach((result, i) => {
            //  console.log(result.user);
            //  console.log(result.pwd);
             cabShare=result.cabShare;
             
         });

         try{
            res.header("Access-Control-Allow-Origin","*");
            res.status(200);
          res.json({user:result.user,pwd:result.pwd,events:result.events,status:"approved"});
          }catch(e){}
      }
         
         
      else {
        console.log("denied!!!");
        try{
         res.header("Access-Control-Allow-Origin","*");
         res.status(200);
        res.json({status:"denied"});
        }catch(e){}
     }
     } else {
        console.log(`No listings found with the name `);
     }
    } finally {
        await client.close();
    }
 }


 
 /**
  * Print an Airbnb listing with the given name
  * Note: If more than one listing has the same name, vaarana only the first listing the database finds will be printed.
  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
  * @param {String} nameOfListing The name of the listing you want to find
  */
  async function SignUp(req,res,client)
  {
   // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
   try {
      console.log("Inside Sign Up");
      await client.connect();
      const result0 = await client.db("test").collection("users").find({user:req.query.u});
      if(result0)
      {
            const cursor = client.db("test").collection("users").find({user:req.query.u,pwd:req.query.p});
            const results = await cursor.toArray();
            if(results.length==0)
            {
               const result = await client.db("test").collection("users").insertOne({user:req.query.u,pwd:req.query.p,events:""});
               if(result)
               {
                  try{
                     console.log("success");
                     res.header("Access-Control-Allow-Origin","*");
                     res.status(200);
                  res.json({status:"success"});
                  }catch(e){}
               }
               else
               {
                  try{
                     console.log("failure");
                     res.header("Access-Control-Allow-Origin","*");
                     res.status(200);
                  res.json({status:"failure"});
                  }catch(e){}
               }
               console.log(`New listing created with the following id: ${result.insertedId}`);
   
            }
            else 
            {
               try{
                  console.log("exists");
                  res.header("Access-Control-Allow-Origin","http://localhost:3000");
                  res.status(200);
               res.json({status:"exists"});
               }catch(e){}
            }
         }
         
   else
   {
      try{
         console.log("failure");
         res.header("Access-Control-Allow-Origin","*");
         res.status(200);
        res.json({status:"failure"});
        }catch(e){}
   }
   } catch(err){}
   finally {
   await client.close();
}
}



 
 main();

 