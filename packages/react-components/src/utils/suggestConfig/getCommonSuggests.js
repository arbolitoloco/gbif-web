import React from 'react';
import matchSorter from 'match-sorter'
import country from '../../locales/enums/countryCode.json';

const BACKBONE_KEY = 'd7dddbf4-2cf0-4f39-9b2a-bb099caae36c';

const countryCodes = Object.keys(country);

export const suggestStyle = { whiteSpace: 'nowrap', textOverflow: 'ellipsis', width: '100%', overflow: 'hidden' };

export function getCommonSuggests({ context, suggestStyle }) {
  const { client, formatMessage } = context;
  
  const countries = countryCodes.map(code => ({
    title: formatMessage({ id: `enums.countryCode.${code}` }),
    key: code
  }));

  return {
    countryCode: {
      //What placeholder to show
      placeholder: 'Search by country',
      // how to get the list of suggestion data
      getSuggestions: ({ q }) => {
        return {
          cancel: () => null,
          promise: (async () => {
            return {data: matchSorter(countries, q, {keys: ['title', 'key']})};
          })()
        }
      },
      // how to map the results to a single string value
      getValue: suggestion => suggestion.title,
      // how to display the individual suggestions in the list
      render: function CountrySuggestItem(suggestion) {
        return <div style={{}}>
          <div style={suggestStyle}>
            {suggestion.title}
          </div>
        </div>
      }
    },
    datasetKey: {
      //What placeholder to show
      placeholder: 'Search by dataset',
      // how to get the list of suggestion data
      getSuggestions: ({ q }) => client.v1Get(`/dataset/suggest?limit=8&q=${q}`),
      // how to map the results to a single string value
      getValue: suggestion => suggestion.title,
      // how to display the individual suggestions in the list
      render: function DatasetSuggestItem(suggestion) {
        return <div style={{}}>
          <div style={suggestStyle}>
            {suggestion.title}
          </div>
        </div>
      }
    },
    publisherKey: {
      //What placeholder to show
      placeholder: 'Search by publisher',
      // how to get the list of suggestion data
      getSuggestions: ({ q }) => client.v1Get(`/organization/suggest?limit=8&q=${q}`),
      // how to map the results to a single string value
      getValue: suggestion => suggestion.title,
      // how to display the individual suggestions in the list
      render: function PublisherSuggestItem(suggestion) {
        return <div style={{ maxWidth: '100%' }}>
          <div style={suggestStyle}>
            {suggestion.title}
          </div>
        </div>
      }
    },
    taxonKey: {
      //What placeholder to show
      placeholder: 'Search by scientific name',
      // how to get the list of suggestion data
      getSuggestions: ({ q }) => client.v1Get(`/species/suggest?datasetKey=${BACKBONE_KEY}&limit=8&q=${q}`),
      // how to map the results to a single string value
      getValue: suggestion => suggestion.scientificName,
      // how to display the individual suggestions in the list
      render: function ScientificNameSuggestItem(suggestion) {
        return <div style={{ maxWidth: '100%' }}>
          <div style={suggestStyle}>
            {suggestion.scientificName}
          </div>
          {/* <div style={{ color: '#aaa', fontSize: '0.85em' }}>
            <Classification taxon={suggestion} />
          </div> */}
        </div>
      }
    }
  }
}