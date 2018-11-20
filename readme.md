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
I started with a skeleton build of all the files and folders outlined. 
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


I started with building the database [Schema](schema.sql). 
I've had experience working with SQL and databases so this went very smoothly. 
Once the database was built I started with the [Javascript welcome file](welcome.js).
I first established a connection to the database then populated all the contents to the `console` to confirm it worked.
Then I ran into issue 1 of calling to the database with variables. 
Issue 2 was more of a challenge I gave myself to simplify my code. 
Once I had the established `inquirer.prompt()`'s it was all switches and `connection.query()`'s from there.
This all went very smoothly and once I wrote out a successful query in most cases I put it into a function and created the parameters for the variables. 
I really enjoy building functions and callbacks instead of writing out things multiple times.


### Issues
1. 
Once I wrote the first inquirer prompt and thought about how often I'd have to use inquirer I realized I wanted to build it out as a function.
```js
function promptList(name, choices, message, callback) {
    inquirer.prompt({
        name: name,
        type: 'list',
        message: message,
        choices: choices
    }).then( answers => {
        callback(answers);
    })
};
function openStore() { promptList('action',storeOptions,'Welcome to bamazon',returnPrompt); };
```
I was happy to find that stacking variables like this works very smoothly and allowed me to condense my code greatly. 

2. 
I initially ran into an issue with communicating with the database using `.query(sqlQuery,options,callback)` and using the parameter `options` because I learned it using an object like `{name: name}`.
```js
var newSql = 'INSERT INTO products (item_name, department_name, price, avail_quantity) VALUES (?,?,?,?)';
 connection.query(newSql,[answers.name, answers.department, answers.price, answers.quantity], (err,res) =>{
            if(err) {console.log(err.sqlMessage), openStore();}
```
It wasn't a big issues but it required me to go to their website and look into the parameters syntax more for the `options`.  


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
