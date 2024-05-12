const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require('./middlewares/cors')
const PORT = 5000;
const app = express();
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages')


const {connectToDatabase} = require('./database/connect');

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    pagesRouter,
    apiRouter,

); 

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});