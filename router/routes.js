const express = require("express");
const app = express();

const Message = require('../model/Message');


app.get('/', (req, res) => {
    res.set({"Allow-access-Allow-Origin": '*'});
})

app.get('/ej', (req, res) => {
    res.render('pages/index');
})

app.set('view engine', 'ejs');


app.post('/post', async(req, res) => {
    // const {name} = req.body.name;
    // const {email} = req.body.email;
    // const {message} = req.body.message;

    const msg = new Message({name: req.body.name, email: req.body.email, message: req.body.message});
    await msg.save()
    .then( message => {
        //res.send("Your message has been sent.");
        console.log("Your message has been sent.");
    })
    .catch(err => {
        //res.status(400).send("Unable to save to database");
        console.log("Unable to save to database");

    })

    res.render('pages/index', {msg});
    
    //prodjuje na home stranicu
    // return res.redirect('/');
})

module.exports = app;