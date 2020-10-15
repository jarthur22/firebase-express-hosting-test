## Main directory

#### Run:

`firebase init`
    Hosting, Functions, Firestore, Storage(?),
    public

`create-react-app public` (after installs)

#### Install:

`express create-react-app`

#### Add Folders/Files:

#### Change:

In `firebase.json`:
```json
{
    "hosting": {
        "public": "public/build",
        "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
        ],
        "rewrites": [
        {
            "source": "**",
            "function": "api"
        }
        ]
    }
}
```


## Backend: Functions

#### Run:

#### Install:

`express mongoose cors`

#### Add Folders/Files:
* env_vars.json
* -api
    * auth.js
    * -mongo
        * data.js
        * -models
            * Person.js


#### Change:

In `package.json`:
```json
{
    "main": "server.js"
}
```

`index.js` to `server.js`

In `server.js`:
```javascript
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const vars = require("./env_vars.json");
const auth = require('./api/auth');
const data = require('./api/mongo/data');

const app = express();
app.use(cors());

//use routes
app.use('/auth', auth);
app.use('/data', data);

//connect Mongo
var dbAuth = vars.database;
const mongoURI = `mongodb+srv://${dbAuth.username}:${dbAuth.password}@cluster0.ulqar.mongodb.net/${dbAuth.db}?retryWrites=true&w=majority`;
mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

exports.api = functions.https.onRequest(app);
```

In `api/mongo/data.js`:
```javascript
const express = require('express');
const Person = require('./models/Person');

const app = express();

app.get("/", (req, res) => {
    Person.find().then(results => {
        results.length > 0 ? res.json(results): res.sendStatus(400)
    })
});

module.exports = app;
```

In `api/mongo/models/Person.js`:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    fname: String,
    lname: String,
    age: Number
}, {collection: 'people'});

module.exports = Person = mongoose.model("people", PersonSchema);
```

In `env_vars.json`:
```json
{
    "database":{
        "db": "testdb",
        "username": "fullstack",
        "password": "fullstack1234"
    }
}
```

## Frontend: Public

#### Run:

`npm start`

`npm run build`

#### Install:

`axios react-bootstrap bootstrap react-router-dom react-router-bootstrap`

#### Add Folders/Files:

Pick a bootswatch theme from `src/bootswatch-themes` and import in index.js

#### Change:

In `package.json`:
```json
{
    "proxy": "<insert base url for api function here>"
}
```