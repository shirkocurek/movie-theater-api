const express = require('express')
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {User} = require("../models/index")
const {Show} = require("../models/index")
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended : true}))



router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  })

router.get('/:id', async (req, res) => {
    const founduser = await User.findByPk(req.params.id);
    res.json(founduser);
  })

// GET all shows watched by a user (user id in req.params)//

router.get('/:id/shows', async(req,res) =>{
  const showsWatched = await Show.findAll({
    where: {
      userId : req.params.id
    }
  });

  res.json(showsWatched);
})
  
  












module.exports = router;