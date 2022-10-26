const express = require("express");
const app = express();
const {sequelize} = require("./db");
const {User} = ("./models/index");
const {Shows} = ("./models/index");
const seed = require("./seed")
const seedData = seed();




const port = 3000;
app.use(express.json())
app.use(express.urlencoded({extended : true}))





app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port" + port);
})
