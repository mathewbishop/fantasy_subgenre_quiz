const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/friends", (req, res) => {
    // Send JSON of all possible friends
});

router.post("/api/friends", (req, res) => {
    let newSurvey = req.body;
    let userScore = newSurvey.score;


        for (let i = 0; i < objects.length; i++) {

            let diff = 0;
            for (let j = 0; j < userScore.length; j++) {
                diff += Math.abs(objects[i].score[j] - userScore[j]);
            }
            console.log(diff);
        }
        
    console.log(newSurvey);
    res.send();
});


module.exports = router