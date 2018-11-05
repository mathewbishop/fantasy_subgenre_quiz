//=====================================================
// Require Modules
//=====================================================
const express = require("express");
const path = require("path");
const viewRoutes = require("./routing/viewRoutes");

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
app.use("/", viewRoutes);
//=====================================================
// Listener
//=====================================================
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});