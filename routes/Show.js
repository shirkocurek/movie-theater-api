const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {Show} = require("../models/Show")


router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
  })

















module.exports = router;