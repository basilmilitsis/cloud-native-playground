// Framework
import { Kafka, EachMessagePayload } from "kafkajs";

// Services
import { WriteListing } from "../api-db/custom/write-listing"

// Types
import { KafkaRequestNewListing } from "./types-kafka";
import { Listing } from "./types-db";


// Kafka setup --------------------------------------------------------------------------
// NOTE: 
//      kafka1:19092 - its not a typo that its "19092"
//      thats the port to access Kafka from inside the container network
//      "9092" would be used from outside - e.g. "localhost:9092"
const kafka = new Kafka({ clientId: "listing-service", brokers: ["kafka1:19092"] });
const consumer = kafka.consumer({ groupId: "test-group", retry: { retries: 5, initialRetryTime: 2000 } })


// Kafka Consumer --------------------------------------------------------------------------
export const runEventConsumer = async () => {

    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true  })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {

            // Log message
            console.log("listing-service - consumer - Received: " + JSON.stringify({ partition, offset: message.offset, value: message.value.toString() }));

            // Deserialise KAFKA EVENT LOG Listing
            const addListing: KafkaRequestNewListing = JSON.parse(message.value.toString()) as KafkaRequestNewListing;

            // Does listing exist?
            // Todo

            // Create DB Listing            
            const newListing: Listing = {
                id: addListing.id,
                price: addListing.price,
                addr: addListing.addr,
                suburb: addListing.suburb,
                agentid: addListing.agentid,
            };

            // Update DB
            let success = await WriteListing.addListing(JSON.stringify(newListing));

            console.log("listing-service - consumer - added listing: " + success);
        },
    })
}