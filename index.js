const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const router = require('./router/api/member');
const bodyParser = require('body-parser');

const app = express();


// Init middleware 
app.use(logger);
app.use(bodyParser.json())

app.use('/api/members', router)
app.use(router)


// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server at ${PORT}`));