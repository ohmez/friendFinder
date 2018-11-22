# Friend Finder
Here I built a database, and established a connection to it through node.
The database holds inventory and the node application allows you to view and purchase them.
Use of this requires node and `npm install` after cloning, the JSON packet will pull the needed dependencies.

Finally open node to the root directory of the clone and run `node welcome`. 

## Index
[Process](#Process)

[Issues](#Issues)

[Screenshots](#Screenshots)

### Process
I started with a skeleton build of all the files and folders outlined in our instructions.
```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
```
Then I initiated my node package with an npm i.
Then installed express and path, which are the two dependencies we have. 

#### Server.js
First initiating the connection to my local host and making sure the server routes are established. 
To keep the server.js file clean and condensed the routes are stored in seperate js files.
```js
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
```
This connects the app function to both `routes.js` files for viewing data in html or sending as JSON content with the API. 
Now that the server listens on the designated port I started working on my routes.

#### Routing
Because these `.js` files are seperate from the server they MUST have
```js
module.exports = function(app) {
  app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, './../public/home.html'));
    })
};
```

#### Comparison
This was a tricky part to do within the `get.post()` since we haven't returned new data after a post before, plus we've never used modal's before.
So many for loops and if statements, there's got to be a better way to do this. 




### Issues
1. [Survey](app/public/survey.html)
I've struggled to get the bootstrap chosen.js to work for making the drop down selections. 
I've reviewed the example and found all the `<script>`'s and `<link>`'s and copied those into my code.
I even copied one of the questions from the example page and I could get my drop down home styled but when clicked nothing would happen.
I finally tried copying the entire HTML page of the example from the source inspection tool in chrome.
I Pasted this into a test.html file and all the drop downs work for making your selections. I have no idea how this is working but when I tried to build my own it wouldn't work. This took up a lot of time trying to get `chosen.js` to work properly. 
I still don't know what I was missing to make this work, I swear I had all the links set up correctly and evertying. 
2. 
I had a lot of issues around posting data, using postman compared to testing it in the browswer caused different instances of data.
Even when I tried to use all the headers in the browser for postman I still sent data differently.
Passing in an array of integers was not working smoothly for me.



### Screenshots
![Start](examples/homescreen.PNG)

![Items View](examples/itemsView.PNG)

![Selected Item](examples/selected.PNG)

![Purchase Fail](examples/purchaseFail.PNG)

![Purchase Success](examples/purchaseSuccess.PNG)

![Department View](examples/departments.PNG)

![Add an Item](examples/addItem.PNG)

![Database Table](examples/database.PNG)

and a video example
[Video Link](examples/example.webm)
