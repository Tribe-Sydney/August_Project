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
















user.listen(port, () =>{
    console.log('User is running fine')
})