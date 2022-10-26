const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {Show} = require("../models/Show")


router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
  })

router.get('/:id', async (req, res) => {
    const foundshow = await Show.findByPk(req.params.id);
    res.json(foundshow);
  })

  router.get('/:id/genre', async (req, res) => {
    const showAtGenre = await Show.findByPk(req.params.genre)
    res.json(showAtGenre);
  })
  









  router.delete("/:id", async (req, res) =>{
    const shows = await Show.findByPk(req.params.id)
    const deletedShow = await shows.destroy();
    res.json(deletedShow);
     
  })















module.exports = router;