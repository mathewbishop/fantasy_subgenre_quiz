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
    
    // An object we will use to find the best match. It will be updated as the for-loop runs
    let bestMatch = {
        name: "",
        photo: "",
        description: "",
        score: 1000
    }
        // First for loop; Here we are looping over the 'database' of existing objects
        for (let i = 0; i < database.objects.length; i++) {

            
            // Will track the total difference in absolute value between the user's score and the objects' scores
            let totalDiff = 0;

            // A nested for-loop that compares the the user's score and the scores of the objects (in absolute value)
                for (let j = 0; j < userScore.length; j++) {
                    totalDiff += Math.abs(database.objects[i].score[j] - userScore[j]);
                }
            
            // This if statement will update the bestMatch object to the object from the database that has the least difference in score with the user
            if (totalDiff <= bestMatch.score) {
                bestMatch.name = database.objects[i].name;
                bestMatch.photo = database.objects[i].photo;
                bestMatch.description = database.objects[i].description;
                bestMatch.score = totalDiff;
            }

            
        }

        // Send back the match
        res.json({ bestMatch });
});


module.exports = router