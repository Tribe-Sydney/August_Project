// packages required
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config,env'})
const mongoose =require('mongoose')

const user = express().

//middleware
user.use(express.json())
const port = 4000

//connection to database

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('successfully connecyed to db')
    }).catch(err => console.log(err))














user.listen(port, () =>{
    console.log('User is running fine')
})