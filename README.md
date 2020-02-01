# cloud-native-playground
A little playground to experiment with some cloud tech

## To run:
- "bash start.sh" to start... and later 
- "bash stop.sh" to tear it down


## kafka events
See all the initially loaded listings via the postgrest endpoint
http://localhost:3000/listing

Request a new listing to be added from the partner-web endpoint
 - this calls an API enpoint in listing-service which then triggers the a kafka event to be produced
 - a kafka consumer in the listing-service will then recieve the event and call the postgrest endpoint to add the listing to the DB
http://localhost:4100/new-listing



## Endpoints

### kafka
kafka Topics UI - http://localhost:8900/

### consumer
consumer-web - http://localhost:4000/
Konga - http://localhost:1337/   *not working 100% yet

### listing
listing-web - http://localhost:3001/
listing-db-postgrest - http://localhost:3000/
listing-db-graphql - http://localhost:5000/
listing-db - http://localhost:5432/

### partner
partner-web - http://localhost:4100/

### shape
*turned off in the start.sh file - was using it to play with serverless & serverless-offline


## Remote Debugging
You can attach to any of the running express server nodes (listing-service/consumer-web/partner-web) in vs code.
