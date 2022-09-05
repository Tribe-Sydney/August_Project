// packages required
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config,env'})
const mongoose =require('mongoose')
const User = require('./model/user-model')
const user = express().

//middleware
user.use(express.json())
const port = 4000

//connection to database

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('successfully connecyed to db')
    }).catch(err => console.log(err))


    //posting user signup to the database
    user.post('/signup', async(req, res) =>
{
    const reqBody = req.body;
    console.log(reqBody, req.body);
    const user = new User (reqBody);
    console.log (user);
    await user.save();
    return res.status(200).send(user);
})

//posting user login to the database
user.post("/login", async(req,res) =>
{
const {email, password} = req.body;
const user = await User.findOne ({email, password});
if (!user) {
    return res.status (404).send("user not found")
    } 
    return res.status (200).send(user);
})


// Delete Account
user.delete('/id', async (req, res)=>{
    try {
      await User.findByIdAndDelete(req.params.id);res.status(200).json({
        status:'successful deleted',
       })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})






user.listen(port, () =>{
    console.log('User is running fine')
})