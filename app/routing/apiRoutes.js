// requiring the array of user data
var friendList = require("./../data/friends.js");
// exporting routes
module.exports = function (app) {
    // display all friend data in json format
    app.get("/api/friendlist", function (req, res) {
        res.json(friendList);
    });
    // compare userData to each friend in array to find best match
    app.post("/api/newFriend", function (req, res) {
        var userAnswers = req.body.answers;
        var bestFriend = {
            name: "",
            picture: "",
            difference: 25
        };
        // iterate over each friend in array of friendList
        for (var i = 0; i < friendList.length; i++) {
            // iterate to compare each answer to user answer
            console.log(friendList[i]);
            for (var j = 0; i < friendList[i].answers[j]; j++) {
                var totalDifference = 0;
                // math to determine difference of each answer from each friend answer
                totalDifference += Math.abs(parseInt(userAnswers[j]) - parseInt(friendList[i].answers[j]));

            };
            if (totalDifference < bestFriend.difference) {
                bestFriend.name = friendList[i].name;
                bestFriend.picture = friendList[i].picture;
                bestFriend.difference = totalDifference;
            };
        };
        friendList.push(req.body);

        res.json(bestFriend);
    });
};