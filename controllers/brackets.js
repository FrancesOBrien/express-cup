const express = require('express')
const router = express.Router()
const Brackets = require('../models/brackets.js')

//Index
router.get('/brackets', (req, res) => {
    Brackets.find({}, (err, foundBrackets) => {
        res.json(foundBrackets)
    })
})

//New -- Will be handled by React application

//Delete
router.delete('/brackets/:id', (req, res) => {
    Brackets.findByIdAndRemove(req.params.id, (err, deletedBrackets) => {
        res.json(deletedBrackets)
    })
})

//Update
router.put('/brackets/:id', (req, res) => {
    Brackets.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBrackets) => {
        res.json(updatedBrackets)
    })
})

//Create
router.post('/brackets/', (req, res) => {
    Brackets.create(req.body, (err, createdBrackets) => {
        res.json(createdBrackets) 
    })
})

//Edit -- Will be handled by React application

//Show
router.get('/brackets/:id', (req, res) => {
    Brackets.findById(req.params.id, (err, foundBrackets) => {
        res.json(foundBrackets)
    })
})

module.exports = router

//this controller contributes to full CRUD for /brackets
