const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    country: String,
    nickname: String,
    image: String,
    confederation: String,
    coach: String,
    captain: String,
    group: String
})

const Teams = mongoose.model('Team', teamSchema)

module.exports = Teams