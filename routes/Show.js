const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {Show} = require("../models/index")
const {User} = require("../models/index")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// GET all shows //
router.get('/', async (req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
  })

// GET one show //  
router.get('/:id', async (req, res) => {
    const foundshow = await Show.findByPk(req.params.id);
    res.json(foundshow);
  })

 
// GET shows of a particular genre //
  router.get('/genres/:genre', async (req, res) => {
    const genre = await Show.findAll({
       where : {
        genre : req.params.genre
       }
    })
  
    res.json(genre);
  })

// PUT update rating of a show that has been watched //
router.put("/:showId/ratings/:rating", async (req, res) =>{
  const updaterating = await Show.findByPk(req.params.showId)
  await updaterating.update(req.body)
  res.json(updaterating)
})

// PUT update the status of a show //
router.put(":showId/status/:status", async (req,res)=>{
  const updatestatus = await Show.findByPk(req.params.showId)
   await updatestatus.update(req.body)
   res.json(updatestatus)
})
  


// DELETE a show //
router.delete("/:id", async (req, res) =>{
    const showtodelete = await Show.destroy({
      where: {
        id: req.params.id
      }
    })
     res.json(await Show.findAll())
  })















module.exports = router;