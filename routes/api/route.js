const express = require('express');
const router = express.Router()

const Bios = require('../../Models/Model');

router.post('/login', (req, res) => {
    const latest = new Bios ({
        username: req.body.username,
        password: req.body.password
    });
});


router.post('/register', (req, res) =>{
    const latent = new Bios ({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        age: req.body.age
    });

    latent.save()
    .then(user => res.json(user))   
});

module.exports = router
