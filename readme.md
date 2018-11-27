# Friend Finder
Here I built a backend server that process stored data and returns content to the viewer while keeping the backend logic hidden.
In the skeleton shown below you can see that data public is all that gets sent to the client, the rest is all in the backend being processed by node server.
I found this very educational for why you break apart the logic into every different scenario.
All the looping I had to do in order to make the `apiRoutes.js` process correctly would've been so clunky and confusing if it was in the `htmlRoutes.js` or the `server.js`.


## Index
[Process](#Process)

[Issues](#Issues)

[Deployed](https://keagans-friend-finder.herokuapp.com/)

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
The process starts with [the server](server.js). -[#](#Server.js)
Then we move onto [Routing](app/routing/). -[#](#Routing)
Once we have the routing set up its all about [receiving the post](app/routing/apiRoutes.js) from the new friend survey. -[#](#Comparison)

  

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
#### HTML
Here is where I ran into my first issue trying to use the `chosen.js` to populate the dropdowns was impossible for me.
Ultimately I spent probably 3-4 hours trying to write this out myself and get the drop downs to work properly and store the selected answer but I had no real luck.
I was able to break down each part individually when building out `test.html` files and using parts of the example heroku app with parts of my attempts.
Nothing seemed to work when I wrote it out myself so I had to copy a majority of the HTML and after all that time I was so burnt out on HTML I had to move on or implode. 

#### Comparison
This was a tricky part where we had to loop through a lot of data to compare it to the newly posted data in order to determine the response to send. 
There's over 50 lines of `for` loop and `if` statements to make sure this works properly and compares everyone. 
See issues 2 & 3 for more information on this process. 

### Issues
1. [Survey](app/public/survey.html)
I've struggled to get the bootstrap chosen.js to work for making the drop down selections. 
I've reviewed the example and found all the `<script>`'s and `<link>`'s and copied those into my code.
I even copied one of the questions from the example page and I could get my drop down home styled but when clicked nothing would happen.
I finally tried copying the entire HTML page of the example from the source inspection tool in chrome.
I Pasted this into a test.html file and all the drop downs work for making your selections. I have no idea how this is working but when I tried to build my own it wouldn't work. This took up a lot of time trying to get `chosen.js` to work properly. 
I still don't know what I was missing to make this work, I swear I had all the links set up correctly and everything. 
My only guess is something with the headers of the HTML page of mine compared to the examples. 
2. [api Routing](app/routing/apiRoutes.js)
I had a lot of issues around posting data, using postman compared to testing it in the browswer caused different instances of data.
Even when I tried to use all the headers in the browser for postman It still sent data differently.
Passing in an array of integers was not working smoothly for me.
I couldn't get postman to send data the same way the browser was; and so I built a loop to make them integers either way they were provided. 
```js
  for(x = 0; x < newFriend.scores.length; x++) {
            newFriend.scores[x] = parseInt(newFriend.scores[x]);
        }// end loop to take user input and parse to integers. 
```
3. [api Routing](app/routing/apiRoutes.js)
I ran into another issue in looping through all the available friends to find the lowest comparison, I had to loop and reduce an array based on the value of a key of each object in the array.
I did some research around arr.filter() and arr.reduce(), but I wasn't finding much luck for how to remove an item from the array if the array was full of objects.
I may have overcomplicated it by storing them as objects but I felt it was best to search for their name in the friends to return the results. 
```js
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
```

### I'm deployed
[link](https://keagans-friend-finder.herokuapp.com/)