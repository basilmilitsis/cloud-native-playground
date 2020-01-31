'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Routes
app.get('/', (req: any, res: any) => {
  res.send('Consumer Web - enpoint - /');
});

// Listen
app.listen(PORT, HOST);
console.log(`consumer-web - express started on http://${HOST}:${PORT}`);
