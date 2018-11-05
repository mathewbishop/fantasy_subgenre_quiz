const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/friends", (req, res) => {
    // Send JSON of all possible friends
});

router.post("/api/friends", (req, res) => {
    let newSurvey = req.body;
    console.log(newSurvey);
    res.end();
});




module.exports = router