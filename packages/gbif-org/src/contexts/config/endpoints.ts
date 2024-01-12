export enum GbifEnv {
  Prod = 'prod',
  Dev = 'dev',
  Uat = 'uat',
  Staging = 'staging',
}

// This will be added to the config based on the gbifEnv
export type Endpoints = {
  graphqlEndpoint: string;
  translationsEntryEndpoint: string;
};

export function isGbifEnv(value: string): value is GbifEnv {
  return Object.values(GbifEnv).includes(value as GbifEnv);
}

export function getEndpointsBasedOnGbifEnv(gbifEnv: GbifEnv): Endpoints {
  // This can happen as the gbifEnv is passed as a string when configuring the HostedPortal
  if (!isGbifEnv(gbifEnv)) {
    throw new InvalidGbifEnvError(gbifEnv);
  }

  switch (gbifEnv) {
    case GbifEnv.Prod:
      return {
        translationsEntryEndpoint:
          'https://react-components.gbif.org/lib/translations/translations.json',
        graphqlEndpoint: 'https://graphql.gbif.org/graphql',
      };
    case GbifEnv.Dev:
      return {
        translationsEntryEndpoint:
          'https://react-components.gbif-dev.org/lib/translations/translations.json',
        graphqlEndpoint: 'https://graphql.gbif-dev.org/graphql',
      };
    case GbifEnv.Uat:
      return {
        translationsEntryEndpoint:
          'https://react-components.gbif-uat.org/lib/translations/translations.json',
        graphqlEndpoint: 'https://graphql.gbif-uat.org/graphql',
      };
    case GbifEnv.Staging:
      return {
        translationsEntryEndpoint:
          'https://react-components.gbif-staging.org/lib/translations/translations.json',
        graphqlEndpoint: 'https://graphql.gbif-staging.org/graphql',
      };
  }
}
export class InvalidGbifEnvError extends Error {
  constructor(gbifEnv: string) {
    super(`Unknown gbifEnv: ${gbifEnv}. Must be one of ${Object.values(GbifEnv).join(', ')}`);
  }
}