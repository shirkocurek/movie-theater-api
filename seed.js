//import dependencies
const path = require('path') //helps us find our file easily
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database

//import our database [x]
//import the model that we are trying to import our data into [x]
const {db} = require('./db')
const { Show, User } = require('./models/index')


//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const showSeedPath = path.join(__dirname, 'shows.json'); //get the path to Show.json file
    const userSeedPath = path.join(__dirname, 'users.json')


    const buffer = await fs.readFile(showSeedPath); //asynchronously reads the content in this file
    const userBuffer = await fs.readFile(userSeedPath);

    const {showsData} = JSON.parse(String(buffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const {usersData} = JSON.parse(String(userBuffer));


    const ShowPromises = showsData.map(show => Show.create(show)); //creates Show and puts it into our Show table
    const UserPromises = usersData.map(user => User.create(user));

                                        //Show.create({'name': 'Tony', 'age': 25})
    const shows =  await Promise.all(ShowPromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    const users  = await Promise.all(UserPromises)

    users[0].setShows([
        shows[0],
        shows[1],
        shows[2],
        shows[3]

    ])
    users[1].setShows([
        shows[4],
        shows[5],
        shows[6],
        shows[7],
        shows[8],
        shows[9],
        shows[10]
    ])

    console.log("Shows and User database info populated!")
}

//export my seed function
module.exports = seed;
