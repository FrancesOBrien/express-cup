const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    name: String,
    flag: Image,
    confederation: String,
    coach: String,
    captain: String,
    group: String
})

const Teams = mongoose.model('Team', teamSchema)

module.exports = Teams