# cloud-native-playground
A little playground to experiment with some cloud tech


See all the initially loaded listings via the postgrest endpoint
http://localhost:3000/listing

Request a new listing to be added from the partner-web endpoint
 - this calls an API enpoint in listing-service which then triggers the a kafka event to be produced
 - a kafka consumer in the listing-service will then recieve the event and call the postgrest endpoint to add the listing to the DB
http://localhost:4100/new-listing

kafka Topics UI
- you can see currently created topics
http://localhost:8900/#/

consumer endpoint
- doesn't do much yet
http://localhost:4000/

Konga
- http://localhost:1337/

shape service
- turned off in the start.sh file - was using it to play with serverless & serverless-offline
