// require the express npm package
var express = require("express");
// initialize the express apackage in a variable
var app = express();
// put port in dynamic variable for hosting
var PORT = process.env.PORT || 3000;
// uhhh....?
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require routing files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// waiting for input on port
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("App listening on PORT: " + PORT);
});