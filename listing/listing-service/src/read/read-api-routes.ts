"use strict";

// Framework
import * as express from "express";
import axios from "axios";

// Services
import { ReadListing } from "../api-db/custom/read-listing";


//-- Endpoints setup --------------------------------------------------------------------------
export class ReadApiRoutes {

    static init = ( app: express.Application ): express.Application => {
        //-- Root
        app.get("/", async (req: express.Request, res: express.Response) => {
            res.send(`listing service - / - Welcome!!!!`);
        });

        //-- Endpoint - all-listings
        app.get("/all-listings", async (req: express.Request, res: express.Response) => {

            let responseString = await ReadListing.allListings();

            res.send(`listing service - /all-listings - [${responseString}]`);
        });

        //-- Endpoint - listings-in-suburb
        app.get("/listings-in-suburb", async (req: express.Request, res: express.Response) => {

            console.log(`listing-service - enpoint - /`);

            let responseString = "<none>";

            await axios.get("http://listing-db-postgrest:3000/listing?suburb=ilike.*Umhlanga*")
                .then( (response: any) => {
                    responseString = JSON.stringify(response.data);
                    console.log(`listing-service - axios - response url - ${responseString}`);
                // console.log(`listing-service - axios - response exp - ${response.data}`);
                })
                .catch( (error: any) => {
                    console.log(`listing-service - axios - error - ${error}`);
                });

            res.send(`listing service - /listings-in-suburb - [${responseString}]`);
        });


        return app;
    }
}


