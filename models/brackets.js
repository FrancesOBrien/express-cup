const mongoose = require('mongoose')

const bracketSchema = new mongoose.Schema({
    //all information for bracket schema will be input?
    //choose winners for each cell
})

const Brackets = mongoose.model('Bracket', bracketSchema)

module.exports = Brackets