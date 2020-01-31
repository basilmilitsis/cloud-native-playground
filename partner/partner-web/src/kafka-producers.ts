// Framework
import { Kafka, EachMessagePayload } from "kafkajs";

// Types
import { Listing } from "./types";


// Kafka Setup
const kafka = new Kafka({
    clientId: 'partner-web',
    brokers: ['kafka:9092']
})

const producer = kafka.producer()

// Service
export class Producers {

    static addListing = async (newListing: Listing): Promise<boolean> => {

        // Producing
        console.log("partner-web - producer - addListing");
        await producer.connect();

        //Add to topic
        console.log("partner-web - producer - addListing - connected to kafka");  
        await producer.send({
            topic: 'test-topic',
            messages: [
                { value: JSON.stringify(newListing) }
            ],
        })
        
        // Return
        console.log("partner-web - producer - addListing - added to topic");  
        return true;
    }
}