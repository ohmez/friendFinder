
var friendsData = require('./../data/friends.js');
var path = require('path');
console.log(friendsData);

module.exports = function(app) {
    app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, './../public/home.html'));
    })
    app.get('/survey', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })

};

