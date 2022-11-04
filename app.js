// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const path = require('path');
// const port = 3000;

// const Message = require('./model/Message');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/post', (req, res, next) => {
//     console.log(req.body.name, req.body.email, req.body.message);
//     res.send("HELLO");
// })

// app.listen(port, () => {
//     console.log(`Connection on port ${port}`);
// })