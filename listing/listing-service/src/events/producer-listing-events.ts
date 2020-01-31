// Framework
import { Kafka } from "kafkajs";

// Types
import { KafkaRequestNewListing } from "./types-kafka";

//-- Kafka Setup --------------------------------------------------------------------------
const kafka = new Kafka({ clientId: "listing-service", brokers: ["kafka1:19092"] });
const producer = kafka.producer();

//-- Service --------------------------------------------------------------------------
export class ProducerListing {

    static requestNewListing = async (requestNewListing: KafkaRequestNewListing): Promise<boolean> => {
        
        let success: boolean = false;

        try {
            // Connect
            await producer.connect();

            console.log("listing-service - producer - CONNECTED :D YAY" );

            // Send event
            await producer.send({ topic: "test-topic", messages: [ { value: JSON.stringify(requestNewListing) } ] })
                .then( () => {
                    console.log("listing-service - producer - requested to create listing" );
                    success = true;
                })
                .catch( () => console.error("listing-service - producer - FAILED to create listing" ) );
        }
        catch (error) {
            console.error("listing-service - producer - EXCEPTION & FAILED to create listing" )
        }
       
        // Return
        return success;
    }
}