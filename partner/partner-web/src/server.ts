'use strict';

// Framework
import * as express from "express";
import axios from "axios";

// Services
import { Producers } from "./kafka-producers";

// Types
import { Listing } from "./types";


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


//-- Express
const app = express();

//-- Endpoint - Root
app.get('/', (req: any, res: any) => {
    res.send('partner-web - enpoint - / ');
});

//-- Endpoint - New listing
app.get('/new-listing', async (req: express.Request, res: express.Response) => {

    let success: boolean = false;

    const newListing: Listing = {
        id: 7,
        addr: "address here",
        price: 150000,
        suburb: "Umhlanga",
        agentid: 2
    };

    // Request Listing-Service to add via Kafka event
    // const success = Producers.addListing( newListing );

    // Request Listing-Service to add via API
    await axios.post('http://listing-service:8080/new-listing', newListing, { headers: { "Content-Type": "application/json"  }} )
    .then( (response: any) => {
        success = true;
        console.log(`partner-web - /new-listing - response - ${response}`);
    })
    .catch( (error: any) => {
        console.log(`partner-web - /new-listing - error - ${error}`);
    });

    // Response
    res.send('partner-web - enpoint - /new-listing - ' + success);
});

// Listen
app.listen(PORT, HOST);
console.log(`partner-web - express started on http://${HOST}:${PORT}`);