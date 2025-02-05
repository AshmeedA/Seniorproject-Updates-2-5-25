// import dotenv from 'dotenv'
// import express from 'express'
// import cors from 'cors'
// import authRouter from './routes/authRoutes.js'
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/auth', authRouter)
// app.listen(process.env.PORT, () => {
//     console.log("Server is running")
// })
// app.post('/auth/registerpgs', (req, res) => {

//     res.send('user registed successfully');
// })

//Denpendecies 
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Listening to the server
app.listen(3006, () => {
    console.log('Server is running on port 3002')
}) 

// now we are creating the db 
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'univlog',
})
app.post('/registerpgs', (req,res) =>{

})