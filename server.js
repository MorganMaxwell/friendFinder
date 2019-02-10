var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("/app/routing/htmlRoutes.js")(app);
// require("/../app/routing/apiRoutes.js")(app);






app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("App listening on PORT: " + PORT);
});