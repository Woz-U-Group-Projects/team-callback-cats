const express = require('express');
const router = express.Router();
const registerTemplateCopy = require('../models/register'); 
const bcrypt = require('bcrypt');

router.post('/register', async (request, response) => {
    console.log('User registered successfully!')

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const registeredUser = new registerTemplateCopy ({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        username: request.body.username,
        email: request.body.email,
        password: securePassword
    })
    registeredUser.save()
    .then(data => {
        response.json(data)
        response.redirect('/Admin/login')
    })
    .catch(error =>{
        response.json(error)
    })
});


module.exports = router;