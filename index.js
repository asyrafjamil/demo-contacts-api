const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const User=require('./models/user');
const db=require('./config/config').get(process.env.NODE_ENV);


const app=express();
// app use
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());

// database connection
mongoose.Promise=global.Promise;
mongoose.connect(db.DATABASE,{ useNewUrlParser: true,useUnifiedTopology:true, useCreateIndex: true },function(err){
    if(err) console.log(err);
    console.log("database is connected");
});


// adding new user (sign-up route)
app.post('/people',async function(req,res){
   // taking a user
   try {
    const newuser = new User({
        ...req.body,
        email: '',
        number: '',
      });
   
         await newuser.save((err,doc)=>{
           if(err) {
               console.log(err);
               return res.status(500).json({ 
                   status : false});
            }
           res.status(201).json({
               status: "Successfully registered "+newuser.name+ "!"
           });
       });
    }catch (error) {
        res.status(500).json({
          status: 'err_service_unavailable',
          message: error.message,
        });
      }  
});


// get logged in user
app.post('/people/:id/contacts', async function(req,res){
try {
    const {email,number} = req.body;
    const _id = req.params.id;
    const user = await User.findOne({_id});
    user.email = email;
    user.number = number;
        
        await user.save();
        return res.status(201).json({
            status: 'Successfully added contacts to '+user.name,
            email: user.email,
            number: user.number
          });
     
} catch (error) {
    res.status(500).json({
      status: 'err_service_unavailable',
      message: error.message,
    });
  }
});

app.get('/contacts', async function(req,res){
    try {
        const name = req.query.q;
        const email = req.query.q;
        const number = req.query.q;
        const q = await User.findOne(
            {$or: [{name}, {email}, {number}]}
            );
        
          if (!q) {
            return res.status(401).json({
              status: 'err_invalid_user',
              message: 'No user found',
            });
          }

          res.status(200).send({
            status: 'success',
            data: q,
          });
    } catch (error) {
        res.status(500).json({
          status: 'err_service_unavailable',
          message: error.message,
        });
      }
    });


app.get('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});