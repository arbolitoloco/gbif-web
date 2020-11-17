// const { ApolloError } = require('apollo-server');
const { RESTDataSource } = require('apollo-datasource-rest');
const config = require('../../../config');

function reduce(people) {
  try {
    const sources = people.filter(x => x).map(p => {
      return Object.keys(p).reduce((map, field) => {
        if (field === 'source') return map;
        if (field === 'raw') return map;
        if (field === 'key') return map;
        if (p[field] === null || typeof p[field] === 'undefined') return map;
        
        map[field] = {
          value: p[field],
          source: p.source
        };
        return map;
      }, {});
    });
    const merged = Object.assign({}, ...sources);
    return merged;
  } catch (err) {
    console.log(err);
    return null;
  }
}

class PersonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.orcid.pubApi;
  }

  willSendRequest(request) {
    request.headers.set('Accept', 'application/json');
  }

  async getPersonByOrcid({ key, dataSources }) {
    const [wiki, type] = await Promise.all([
      dataSources.wikidataAPI.getWikidataPersonByOrcid({ key }),
      dataSources.orcidAPI.getOrcidByKey({ key })
    ]);
    return reduce([wiki, type]);
  }

  async getPersonByViaf({ key, dataSources }) {
    const [wiki, type] = await Promise.all([
      dataSources.wikidataAPI.getWikidataPersonByViaf({ key }),
      dataSources.viafAPI.getViafByKey({ key })
    ]);
    return reduce([type, wiki]);//prefer wiki over viaf as VIAF has a somewhat obscure response format
  }

  async getPersonByIpni({ key, dataSources }) {
    const [wiki] = await Promise.all([
      dataSources.wikidataAPI.getWikidataPersonByIpni({ key })
    ]);
    return reduce([wiki]);
  }

  async getPersonByWikidata({ key, dataSources }) {
    const [wiki] = await Promise.all([
      dataSources.wikidataAPI.getPersonByKey({ key })
    ]);
    return reduce([wiki]);
  }

  async getPersonByIdentifier({ type, value, dataSources }) {
    const val = value.replace(/\/$/, '');
    const key = val.substr(val.lastIndexOf('/') + 1);

    //based on the identifiers
    if (type === 'ORCID') {
      return this.getPersonByOrcid({ key, dataSources });
    } else if (type === 'WIKIDATA') {
      return this.getPersonByWikidata({ key, dataSources });
    } else if (type === 'OTHER' && val.includes('://viaf.org/viaf')) {
      return this.getPersonByViaf({ key, dataSources });
    } else if (type === 'OTHER' && value.startsWith('https://www.ipni.org/ipni/idAuthorSearch.do?id=')) {
      const ipni = value.substr(value.lastIndexOf('=') + 1);
      return this.getPersonByIpni({ key: ipni, dataSources });
    }
  }
}

module.exports = PersonAPI;