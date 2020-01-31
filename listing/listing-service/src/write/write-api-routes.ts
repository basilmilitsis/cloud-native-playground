'use strict';

// Express
import * as express from "express";

// Producers
import { ProducerListing } from "../events/producer-listing-events";
import { KafkaRequestNewListing } from "../events/types-kafka";


//-- Endpoints setup --------------------------------------------------------------------------
export class WriteApiRoutes {

    static init = ( app: express.Application ): express.Application => {

        //-- Endpoint - new-listings
        app.post('/new-listing', async (req: express.Request, res: express.Response) => {

            try {
                
                console.log(`listing-service - /new-listing - request - ${JSON.stringify(req.body)}`);

                // Parse body
                const body = req.body as KafkaRequestNewListing;
                console.log(`listing-service - /new-listing - BODY - ${JSON.stringify(body)}`);

                // Add request to create the Listing
                const success: boolean = await ProducerListing.requestNewListing( body );

                // Response
                if(success) {
                    res.send(`listing service - write-api - /new-listing - Request ADDED`);
                }
                else {
                    res.status(500).send(`listing service - write-api - /new-listing - FAILED to add request`);
                }
            }
            catch (error) {
                console.log(`listing-service - /new-listing - EXCEPTION - ${error}`);
                res.status(500).send(`listing service - write-api - /new-listing - EXCEPTION & FAILED to add request`);
            }
        });

        return app;
    }
}