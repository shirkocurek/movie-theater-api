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
router.put("/ratings/:rating", async (req, res) =>{
  const rating = await Show.findAll({
    where: {
      rating : req.params.rating
    }
  })
  res.json(await Show.findAll())
})




// PUT update the status of a show //
router.put("/statuses/:status", async (req,res)=>{
   await Show.update(req.body, {
    where: {
      status : req.params.status
    }
   })
   res.json(await Show.findAll())
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