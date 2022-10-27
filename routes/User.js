const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {User} = require("../models/index")
const {Show} = require("../models/index")
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended : true}))


// GET all users //
router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })

// GET one users //
router.get('/:id', async (req, res) => {
    const founduser = await User.findByPk(req.params.id);
    res.json(founduser);
  })

// GET all shows watched by a user //
router.get('/:id/shows', async(req,res) =>{
  const showsWatched = await Show.findAll({
    where: {
      userId : req.params.id
    }
  });

  res.json(showsWatched);
})

// PUT update and add a show if a user has watched it //
router.put('/:id/shows/:showId', async(req,res) =>{
  const updateshow = await Show.findByPk(req.params.showId)
  const updateShow = await updateshow.update(req.params.id)
  res.json(updateShow);
})
  
  












module.exports = router;