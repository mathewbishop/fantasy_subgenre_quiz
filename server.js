//=====================================================
// Require Packages
//=====================================================
const express = require("express");
const path = require("path");

//=====================================================
// Global Vars
//=====================================================
const app = express();
const PORT = process.env.PORT || 3000;

//=====================================================
// Middleware
//=====================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//=====================================================
// Listener
//=====================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});