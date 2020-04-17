import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';
import { Config } from './environment/config';
import { Environment } from './environment/environment';

const app = express();

const config: Config = Environment.getConfig();

// Initialize an ApolloGateway instance and pass it an array of
// your implementing service names and URLs
const gateway = new ApolloGateway({
  serviceList: config.microServices,
  debug: config.isDebugMode,
  experimental_pollInterval: config.pollInterval
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false
});
server.applyMiddleware({ app });

app.listen({ port: config.port }, () => {
  console.log(`${config.serviceName} ready at port: ${config.port}`)
});
