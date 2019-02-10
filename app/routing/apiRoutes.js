var friendsList = require("/../data/friends.js");

module.exports = function(app) {
    app.get("/api/friendList", function(req, res) {
        res.json(friendsList);
    });
};