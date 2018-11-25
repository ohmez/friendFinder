
var friendsData = require('./../data/friends.js');


module.exports = function(app) {
    app.get('/api/friends', (req,res) =>{
        res.json(friendsData);
    });
    app.post('/api/friends', (req,res) =>{
        var availFriends = friendsData;
        var newFriend = req.body;
        for(x = 0; x < newFriend.scores.length; x++) {
            newFriend.scores[x] = parseInt(newFriend.scores[x]);
        }// end loop to take user input and parse to integers. 
        var newScores = newFriend.scores;
        var scoresOrder = [];
        for(x=0; x<availFriends.length; x++) {
            var compareScore = availFriends[x].scores;
            var totalDif = 0;
            for(y=0; y<compareScore.length; y++) {
                if(newScores[y] >= compareScore[y]) {
                    var singleDif = (newScores[y] - compareScore[y]);
                    totalDif += singleDif;
                } else {
                    var singleDif = (compareScore[y] - newScores[y]);
                    totalDif += singleDif;
                }
            } 
            var bestOptions = {name: availFriends[x].name, diff: totalDif}
            scoresOrder.push(bestOptions);
            
        }// end loop to compare new survey answers to past survey answers. stores as objects with name and total difference value. 
        for (var z = 0; z < scoresOrder.length; z++) {
            if (scoresOrder.length >= 2) {
                z = 0;
                if (scoresOrder[z].diff >= scoresOrder[(z+1)].diff || scoresOrder[(z+1)] === 0) {
                    scoresOrder.splice(z, 1);
                } else if (scoresOrder[z].diff <= scoresOrder[(z+1)].diff || scoresOrder[z] === 0) {
                    scoresOrder.splice(1, 1);
                }
                if (scoresOrder.length > 2) {
                z = 0;
                } 
            }
        }// end for loop for checking for best friend match to find lowest value for the diff key of the objects. 
        var bestFriend = scoresOrder[0].name;
        for (x=0; x<friendsData.length; x++) {
            if(friendsData[x].name === bestFriend) {
                res.send(friendsData[x])
            }
        }
        friendsData.push(newFriend);
        console.log(friendsData);
        console.log('\n\n')
    })
};

