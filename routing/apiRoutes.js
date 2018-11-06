// Modules
//=====================================================
const express = require("express");
const router = express.Router();
const database = require("../app/data/friends");
//=====================================================
// Routes
//=====================================================
router.get("/api/friends", (req, res) => {
    res.json(database.objects);
});

router.post("/api/friends", (req, res) => {
    // Declare vars for the incoming data, and eventual match
    let newSurvey = req.body;
    let userScore = newSurvey.score;
    let matchName;
    let matchPic;

        // First for loop; Here we are looping over the 'database' of existing objects
        for (let i = 0; i < database.objects.length; i++) {

            // Declare vars to keep track of differences. 'diff' is for the difference between each arry. 'totalDiff is a value used to compare against in order to find the arry with the least difference in value
            let diff = 0;
            let totalDiff = 1000;

            // Second, nested for loop; This loops over the score arrys and performs gets the absolute value difference for each index of each arry in the database
                for (let j = 0; j < userScore.length; j++) {
                    diff += Math.abs(database.objects[i].score[j] - userScore[j]);
                }
            
            // This if statement finds the arry in the database with the least difference in value compared to the user's scores
            if (diff < totalDiff) {
                totalDiff = diff;
                matchName = database.objects[i].name;
                matchPic = database.objects[i].photo;
                console.log(matchName);
            }

            console.log(diff);
        }

        // Send back the match
        res.json({ matchName: matchName, matchPic: matchPic });
});


module.exports = router