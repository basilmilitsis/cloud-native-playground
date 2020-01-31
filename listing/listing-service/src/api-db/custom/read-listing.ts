// Axios
import axios, { AxiosResponse } from "axios";

//-- Service --------------------------------------------------------------------------
export class ReadListing {

    static allListings = async (): Promise<string> => {

        //-- Axios
        let responseString = "<none>";
        await axios.get("http://listing-db-postgrest:3000/listing")
        .then( (response: any) => {
            responseString = JSON.stringify(response.data);
            console.log(`listing-service - axios - response url - ${responseString}`);
        })
        .catch( (error: any) => {
            console.log(`listing-service - axios - error - ${error}`);
        });
        return responseString;
    }
}