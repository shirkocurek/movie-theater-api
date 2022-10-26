const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {User} = require("../models/User")


router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })

router.get('/:id', async (req, res) => {
    const founduser = await User.findByPk(req.params.id);
    res.json(founduser);
  })
  
  












module.exports = router;