import { ServiceEndpointDefinition } from '@apollo/gateway';

const baseConfig: Config = {
  port: parseInt(process.env.PORT, 10) || 6000,
  serviceName: process.env.SERVICE_NAME || 'Gateway Service',
  microServices: [
    {
      name: 'Users',
      url: 'http://localhost:4000/graphql'
    },
    {
      name: 'Products',
      url: 'http://localhost:5000/graphql'
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
