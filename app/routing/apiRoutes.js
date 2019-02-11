// requiring the array of user data
var friendList = require("./../data/friends.js");
// exporting a route that displays all friend data as json
module.exports = function(app) {
    
    app.get("/api/friendlist", function(req, res) {
        res.json(friendList);
    });

    app.post("api/newFriend", function() {

    })
};