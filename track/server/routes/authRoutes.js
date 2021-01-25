const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/signup", async (req, res)=>{
    const { email, password } = req.body;
    try{
        const user = new User({ email, password });

        await user.save();
        const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY');
        res.send({token})
    } catch(err){
        res.send('failed');
    }
    
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    if(!email || !password ){
        return res.send({error : 'Must Provude email and password'});
    }

    const user = await User.findOne({email});

    if(!user){
        return res.send({ email : 'email not found'});
    }

    try{
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        res.send({token});
    } catch(err){
        return res.send({ error : 'Error in auth'});
    }
    
})

module.exports = router;