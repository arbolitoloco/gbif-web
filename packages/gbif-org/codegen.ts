import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnv } from 'vite';
import { getEndpointsBasedOnGbifEnv, GbifEnv } from './src/contexts/config';

const env = loadEnv('', process.cwd(), ['PUBLIC_']);
const endpoints = getEndpointsBasedOnGbifEnv(env.PUBLIC_GBIF_ENV as GbifEnv);

const config: CodegenConfig = {
  overwrite: true,
  schema: endpoints.graphqlEndpoint,
  documents: 'src/**/*.tsx',
  generates: {
    'src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
