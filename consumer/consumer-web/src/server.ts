'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


// Random number to identify this instance
const randomNum = Math.random();


// Routes
app.get('/', (req: any, res: any) => {
    res.send(`Consumer Web - enpoint - / - [${randomNum}]`);
});

app.get('/dosomething', (req: any, res: any) => {
    res.send(`Consumer Web - enpoint - /dosomething - [${randomNum}]`);
});
    

// Listen
app.listen(PORT, HOST);
console.log(`consumer-web - express started on http://${HOST}:${PORT} - [${randomNum}]`);
