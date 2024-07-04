import { GraphQLError } from "graphql";
import { RegisterModel, RegisterModelType } from "../DB/register.ts";
import { getAirportsByCountry, getAirQualityByCoordinates } from "../lib/apifunctions.ts";


export const Mutation = {
  addRegister: async (_: unknown, args: { country: string }): Promise<RegisterModelType> => {
    try {
      const airports = await getAirportsByCountry(args.country);
      if (!airports || airports.length === 0) {
        throw new GraphQLError("No airports found for the given country");
      }

      const validAirports = airports.filter(airport => 
        airport.iata && airport.latitude && airport.longitude
      );

      if (validAirports.length === 0) {
        throw new GraphQLError("No valid airports found for the given country");
      }

      const updatedAirports = await Promise.all(validAirports.map(async (airport) => {
        try {
          const airQuality = await getAirQualityByCoordinates(airport.latitude, airport.longitude);
          return { ...airport, airQuality };
        } catch (error) {
          console.error(`Failed to retrieve air quality data for airport: ${airport.name}`, error);
          return null;
        }
      }));

      const finalAirports = updatedAirports.filter(airport => airport !== null);

      if (finalAirports.length === 0) {
        throw new GraphQLError("No valid airports with air quality data found for the given country");
      }

      const register = new RegisterModel({
        date: new Date(),
        airports: finalAirports
      });

      await register.save();
      return register;
    } catch (err) {
      console.error("Error adding new register:", err);
      throw new GraphQLError(err.message);
    }
  },

  updateRegister: async (_: unknown, args: { id: string, country: string }): Promise<RegisterModelType> => {
    try {
      const registerToUpdate = await RegisterModel.findById(args.id);
      if (!registerToUpdate) {
        throw new GraphQLError("Register not found");
      }

      const airports = await getAirportsByCountry(args.country);
      const validAirports = airports.filter(airport => 
        airport.iata && airport.latitude && airport.longitude
      );

      if (validAirports.length === 0) {
        throw new GraphQLError("No valid airports found for the given country");
      }

      const updatedAirports = await Promise.all(validAirports.map(async (airport) => {
        try {
          const airQuality = await getAirQualityByCoordinates(airport.latitude, airport.longitude);
          return { ...airport, airQuality };
        } catch (error) {
          console.error(`Failed to retrieve air quality data for airport: ${airport.name}`, error);
          return null;
        }
      }));

      const finalAirports = updatedAirports.filter(airport => airport !== null);

      if (finalAirports.length === 0) {
        throw new GraphQLError("No valid airports with air quality data found for the given country");
      }

      registerToUpdate.airports = finalAirports;
      registerToUpdate.date = new Date();
      await registerToUpdate.save();
      return registerToUpdate;
    } catch (err) {
      console.error("Error updating register:", err);
      throw new GraphQLError(err.message);
    }
  },

  deleteRegister: async (_: unknown, args: { id: string }): Promise<Boolean> => {
    try {
      const result = await RegisterModel.deleteOne({ _id: args.id });
      return result.deletedCount === 1;
    } catch (err) {
      console.error("Error deleting register:", err);
      throw new GraphQLError(err.message);
    }
  }
};