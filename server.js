var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
// end initial setup of server
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// end server parsing options
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
// end routing directions 


app.listen(PORT,(err) => {
    if (err) throw err;
    console.log('listening on port: ' +PORT);
})