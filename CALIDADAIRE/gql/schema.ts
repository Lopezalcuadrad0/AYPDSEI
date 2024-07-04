export const typeDefs = `#graphql
  type AirQuality {
    overall_aqi: Int!
    CO: CO!
    NO2: NO2!
  }

  type CO {
    concentration: Float!
    aqi: Int!
  }

  type NO2 {
    concentration: Float!
    aqi: Int!
  }

  type Airport {
    icao: String!
    iata: String!
    name: String!
    city: String!
    region: String!
    country: String!
    latitude: String!
    longitude: String!
    airQuality: AirQuality!
  }

  type Register {
    id: ID!
    date: String!
    airports: [Airport!]!
  }

  type Query {
    getRegisters: [Register!]!
    getRegister(id: ID!): Register!
  }

  type Mutation {
    addRegister(country: String!): Register!
    updateRegister(id: ID!, country: String!): Register!
    deleteRegister(id: ID!): Boolean!
  }
`;
