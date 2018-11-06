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
    let userScore = newSurvey.score;
    let matchName;

        for (let i = 0; i < database.objects.length; i++) {

            let diff = 0;
            let totalDiff = 1000;
            for (let j = 0; j < userScore.length; j++) {
                diff += Math.abs(database.objects[i].score[j] - userScore[j]);
            }
            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = database.objects[i].name;
                console.log(matchName);
            }
            console.log(diff);
            
        }
        
        
        
        
        res.end();
});


module.exports = router