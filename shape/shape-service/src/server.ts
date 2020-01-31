import app from "./app";
import * as serverless from "serverless-http";

const appHandler = serverless(app);
module.exports.handler = async (event, context) => {
    return await appHandler(event, context);
};

console.log("shape-service - started");