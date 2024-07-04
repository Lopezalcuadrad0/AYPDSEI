import mongoose from "mongoose";
import { AirQuality, Airport } from "../types.ts";  // Asegúrate que las importaciones son correctas

// Definiciones de Esquemas de Mongoose
const AirQualitySchema = new mongoose.Schema({
  overall_aqi: { type: Number, required: true },
  CO: {
    concentration: { type: Number, required: true },
    aqi: { type: Number, required: true }
  },
  NO2: {
    concentration: { type: Number, required: true },
    aqi: { type: Number, required: true }
  }
});

const AirportSchema = new mongoose.Schema({
  icao: { type: String, required: true },
  iata: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  airQuality: { type: AirQualitySchema, required: true }
});

const RegisterSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  airports: { type: [AirportSchema], required: true }
});

// Definición del tipo de modelo de Mongoose utilizando TypeScript
export type RegisterModelType = mongoose.Document & {
  date: Date,
  airports: (Airport & { airQuality: AirQuality })[]
};

// Creación y exportación del modelo
export const RegisterModel = mongoose.model<RegisterModelType>("Register", RegisterSchema);

