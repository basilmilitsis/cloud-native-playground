// Framework
import axios from "axios";

// Service
export class WriteListing {

    static addListing = async (newListingJson: string): Promise<boolean> => {

        let success = false;

        await axios.post('http://listing-db-postgrest:3000/listing', newListingJson, { headers: { "Content-Type": "application/json"  }} )
        .then( (response: any) => {
            success = true;
            console.log(`listing-service - api - success`);
        })
        .catch( (error: any) => {
            console.log(`listing-service - api - error - ${error}`);
        });

        return success;
    }
}