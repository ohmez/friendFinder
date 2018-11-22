
var friendsData = require('./../data/friends.js');


module.exports = function(app) {
    app.get('/api/friends', (req,res) =>{
        res.json(friendsData);
    });
    app.post('/api/friends', (req,res) =>{
       
        var availFriends = friendsData;
        var newFriend = req.body;
        
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
            
        }
        console.log(scoresOrder);
        for(z=0; z<scoresOrder.length -1; z++) {
            if(scoresOrder[z].diff > scoresOrder[z+1].diff) {
                scoresOrder.splice(z,1);
                z=0;
            }
            if(scoresOrder[z+1] > scoresOrder[z]) {
                scoresOrder.splice((z+1),1);
            }
        }
        console.log(scoresOrder);
        var bestFriend = scoresOrder[0].name;
        for (x=0; x<friendsData.length; x++) {
            if(friendsData[x].name === bestFriend) {
                res.send(friendsData[x])
            }
        }
        
        friendsData.push(newFriend);
        
        // @TODO - Review this algorythm, it seems so long and complex....
    })
};

