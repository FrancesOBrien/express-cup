const express = require('express');
const router = express.Router();
const Teams = require('../models/teams.js');
//remember INDUCES to display team info

//Index
router.get('/teams', (req, res) => {
    Teams.find({}, (err, foundTeams) => {
        res.json(foundTeams)
    })
})

//Show
router.get('/teams/:id', (req, res) => {
    Teams.findById(req.params.id, (err, foundTeams) => {
        res.json(foundTeams)
    })
})

module.exports = router

//this controller shows Index and Show routes for Teams database only