const router = require('express').Router();
const { parse } = require('dotenv/types');
const User = require('../models/Users')

router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save()
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;