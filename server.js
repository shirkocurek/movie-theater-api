const express = require("express");
const app = express();
const {sequelize} = require("./db");
const {db} = require("./db")
const seed = require("./seed")
seed();
const showrouter = require("./routes/Show");
const userrouter = require("./routes/User");


const port = 3000;

app.use("/shows", showrouter)
app.use("/users", userrouter)






app.listen(port, () => {
    /*sequelize.sync();*/
    console.log("Your server is listening on port" + port);
})
