const express = require("express");
const app = express();
const {db} = require("./db")
const seed = require("./seed")
const showrouter = require("./routes/Show");
const userrouter = require("./routes/User");
seed();

const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/shows", showrouter)
app.use("/users", userrouter)






app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port" + port);
})
