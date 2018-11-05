const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/friends", (req, res) => {
    // Send JSON of all possible friends
});

router.post("/api/friends", (req, res) => {
    // incoming survey posts and compatibility logic
});




module.exports = router