//Dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection
const Teams = require('./models/teams')
const teamData = require('./utilities/teamdata')

//Environmental variables
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

//Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true }, 
    () => console.log('MongoDB connection established', mongoURI)
)

//Error / Disconnection
db.on('error', err => console.log(err.messaage + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

//Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

//Routes
const teamsController = require('./controllers/teams')
const Brackets = require('./models/brackets')
app.use('/teams', teamsController)

const bracketsController = require('./controllers/brackets')
app.use('/brackets', bracketsController)

//Seeding the  db
app.get('/seed', async (req, res) => {
    await Teams.deleteMany({})
    await Teams.insertMany(teamData)
    res.send('done!')
})

app.listen(PORT, () => {
    console.log('this message means nothing', PORT)
})