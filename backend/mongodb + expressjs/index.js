const express = require('express')
const connectMongo = require('./mongoConnect')
const bcrypt = require('bcrypt')
// const User = require('../models/User')
const port = 5000

const app = express()

app.get('/getSup', (req, res)=>{
    res.send('working')
})

app.post('/signup', async (req, res)=>{
       try{
      const {email, password} = req.body;
      const saltedRounds = 12;
      const hashed = bcrypt.hash(password, saltedRounds)

      if(!email||!password){
         return res.status(500).json({ message: 'Fillout all fields' })
      }

      const newUser = new User({
         email: email.toLowerCase(),    // I will ask my mentor about this toLowerCase()
         password
      })
    
      await newUser.save()

   }catch(e){
      res.status(400).json({message:'Server side signup error', error: e.message})
   }
})

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`)
})