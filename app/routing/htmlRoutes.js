// requiring path to have dynamic directory paths for hosting
var path = require("path");
// exporting GET request to serve survey html, and 'use' to catch all other URL input and just serve the home page
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};