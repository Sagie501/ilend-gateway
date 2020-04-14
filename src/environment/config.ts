import { ServiceEndpointDefinition } from '@apollo/gateway';

const baseConfig: Config = {
  port: parseInt(process.env.PORT, 10) || 80,
  serviceName: process.env.SERVICE_NAME || 'Gateway Service',
  microServices: [
    {
      name: 'Users',
      url: 'http://193.106.55.108:5000/graphql'
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
        url: 'http://ilend-users-service:5000/graphql'
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
