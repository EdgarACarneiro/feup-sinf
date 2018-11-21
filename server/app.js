const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const user = require('./routes/user.route'); // Imports routes for the users
// initialize our express app
const app = express();

app.use('/users', user);

app.listen(PORT, () => {
    console.log('Server is up and running on port ' + PORT);
});