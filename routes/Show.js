const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {Show} = require("../models/index")
const {User} = require("../models/index")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))



router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
  })

router.get('/:id', async (req, res) => {
    const foundshow = await Show.findByPk(req.params.id);
    res.json(foundshow);
  })

  router.get('/genres/:genre', async (req, res) => {
    const genre = await Show.findAll({
       where : {
        genre : req.params.genre
       }
    })
  
    res.json(genre);
  })
  









  router.delete("/:id", async (req, res) =>{
    const shows = await Show.findByPk(req.params.id)
    const deletedShow = await shows.destroy();
    res.json(deletedShow);
     
  })















module.exports = router;