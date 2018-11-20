
var friendsData = require('./../data/friends.js');
console.log(friendsData);

module.exports = function(app) {
    app.get('/api/survey', (req, res) => {
        var results = res.body
        console.log(results);
    });
    app.get('/api', (req,res) =>{
        
    })

};

