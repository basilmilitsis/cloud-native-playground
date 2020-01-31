// Express
import express from "express";
import * as bodyParser from "body-parser";

// Routes
import { WriteApiRoutes } from "./write/write-api-routes";
import { ReadApiRoutes } from "./read/read-api-routes";

// Kafka Consumer
import { runEventConsumer } from "./events/consumer-listing-events";


//-- Express setup --------------------------------------------------------------------------
let app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//-- Express Endpoints --------------------------------------------------------------------------
app = ReadApiRoutes.init( app );
app = WriteApiRoutes.init( app );

runEventConsumer().catch( ( e: any ) => console.error( "listing-service - CAUGHT !!!!!!!!!!!!!!!" + e ) );

//-- Listen --------------------------------------------------------------------------
app.listen( 8080, "0.0.0.0");


// App
console.log(`listing-service - running`);