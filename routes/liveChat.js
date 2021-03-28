const express = require('express')
const user = require('../models/user')
const router = express.Router()

const users = ['admin'] // Dummy array for users

router.get('/', (req, res, next) => {
    res.render('pages/pr12-login', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12'
    })
})

// Verify login submission to access chat room.
router.post('/login', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    console.log(req.body)

    if (users.indexOf(req.body.username) == -1){
        console.log("We got it")
        users.push(req.body.username)
    }
})

// Render chat screen.
router.get('/chat', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/

})

module.exports = router
