import { GraphQLError } from "graphql";
import { Register, Airport } from "../types.ts";  
import { getAirQualityByCoordinates } from "../lib/apifunctions.ts";

export const RegisterResolver = {
  airQualityDetails: async (parent: Register): Promise<Airport[]> => {
    try {
      const updatedAirports: Airport[] = await Promise.all(parent.airports.map(async (airport) => {
        const airQuality = await getAirQualityByCoordinates(airport.latitude, airport.longitude);
        return { ...airport, airQuality };
      }));
      return updatedAirports;
    } catch (err) {
      console.error(err);
      throw new GraphQLError(err.message);
    }
  },
};
