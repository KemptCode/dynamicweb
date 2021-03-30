const express = require('express')
const { reset } = require('nodemon')
const user = require('../models/user')
const router = express.Router()

const users = ['admin'] // Dummy array for users

router.get('/', (req, res, next) => {
    res.render('pages/pr12-login', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12',
    })
})

// Verify login submission to access chat room.
router.post('/login', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    console.log(req.body)
    
    const username = req.body.username.trim();

    //error checking
    if (!username || username === ''){
        return res.status(400).send({ error: 'Username cannot be empty!'})
    }

    //check if 
    if (users.indexOf(username) == -1){
        
        //We got the 
        console.log("We got it")

        //Add it to the existing users
        users.push(username)

        //Add it to the session
        req.session.user = username
        return res.status(200).send({username: username})
    }
    else
    {
        return res.status(400).send({error: "Username already exists"})
    }
})

// Render chat screen.
router.get('/chat', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
     res.render('pages/pr12-chat', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12',

        //from sessions
        user: req.session.user
    })
})

module.exports = router
