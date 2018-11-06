const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const database = require("../app/data/friends");

router.get("/api/friends", (req, res) => {
    res.json(database.objects);
});

router.post("/api/friends", (req, res) => {
    let newSurvey = req.body;
    console.log(newSurvey);
    
    let userScore = newSurvey.score;


        for (let i = 0; i < database.objects.length; i++) {

            let diff = 0;
            for (let j = 0; j < userScore.length; j++) {
                diff += Math.abs(database.objects[i].score[j] - userScore[j]);
            }
            console.log(diff);
        }
        console.log(database.objects);
        
        
        res.json(newSurvey);
});


module.exports = router