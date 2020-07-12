const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express(); // create express app
app.use(express.static(path.join(__dirname, "..", "build")));
// app.get("/", (req, res) => {
//     res.send("This is from express.js");
// });
// app.get('/api', (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "users.json"));
// })
app.use(express.static("public"));
// start express server on port 5000
app.listen(port, () => {
    console.log("server started on port 5000");
});