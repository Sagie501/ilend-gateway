import { ServiceEndpointDefinition } from '@apollo/gateway';

const baseConfig: Config = {
  port: parseInt(process.env.PORT, 10) || 443,
  serviceName: process.env.SERVICE_NAME || 'Gateway Service',
  microServices: [
    {
      name: 'Users',
      url: 'http://localhost:5000/graphql'
    },
    {
      name: 'Products',
      url: 'http://localhost:5001/graphql'
    },
    {
      name: 'Addresses',
      url: 'http://localhost:5002/graphql'
    },
    {
      name: 'Leasing',
      url: 'http://localhost:5003/graphql'
    }
  ]
};

export const config: EnvironmentConfig = {
  dev: {
    ...baseConfig
  },
  prod: {
    ...baseConfig,
    microServices: [
      {
        name: 'Users',
        url: 'http://127.0.0.1:5000/graphql'
      },
      {
        name: 'Products',
        url: 'http://127.0.0.1:5001/graphql'
      },
      {
        name: 'Addresses',
        url: 'http://127.0.0.1:5002/graphql'
      },
      {
        name: 'Leasing',
        url: 'http://127.0.0.1:5003/graphql'
      }
    ]
  }
};

export interface EnvironmentConfig {
  dev: Config;
  prod: Config;
}

export interface Config {
  port: number;
  serviceName: string;
  microServices: Array<ServiceEndpointDefinition>;
}
