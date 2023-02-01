const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE
mongoose.connect(DB, {

})
    .then(() => { console.log("Connection success") })
    .catch((err) => console.log(`no connection`));


const middleware = (req, res, next) => {
    console.log(`hello middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Home`);
});
app.get('/contact', middleware, (req, res) => {
    res.send(`Contact`);
});
app.get('/about', (req, res) => {
    res.send(`About`);
});
app.get('/signin', (req, res) => {
    res.send(`SignIn`);
});
app.get('/signup', (req, res) => {
    res.send(`SignUp`);
});

app.listen(3000, () => {
    console.log(`Server is run on port no 3000`);
});
