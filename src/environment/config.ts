import { ServiceEndpointDefinition } from '@apollo/gateway';

const baseConfig: Config = {
  port: parseInt(process.env.PORT, 10) || 8000,
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
    }
  ]
};

export const config: EnvironmentConfig = {
  dev: {
    ...baseConfig
  },
  prod: {
    ...baseConfig
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
