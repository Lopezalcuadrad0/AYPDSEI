import { AirQuality, Airport } from "../types.ts";

// Función para obtener aeropuertos por país
export const getAirportsByCountry = async (country: string): Promise<Airport[]> => {
  const API_KEY = Deno.env.get("API_KEY1");
  if (!API_KEY) {
    throw new Error("API_KEY not found");
  }
  const url = `https://api.api-ninjas.com/v1/airports?country=${country}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY
    }
  });
  if (data.status !== 200) {
    console.error("Error cap:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  return response;
}

// Función para obtener la calidad del aire por coordenadas
export const getAirQualityByCoordinates = async (latitude: string, longitude: string): Promise<AirQuality> => {
  const API_KEY = Deno.env.get("API_KEY1");
  if (!API_KEY) {
    throw new Error("API_KEY not found");
  }
  const url = `https://api.api-ninjas.com/v1/airquality?lat=${latitude}&lon=${longitude}`;
  const data = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY
    }
  });
  if (data.status !== 200) {
    console.error("Error cap:", data.status, data.statusText);
    throw new Error("Error");
  }
  const response = await data.json();
  const airQuality: AirQuality = {
    overall_aqi: response.overall_aqi,
    CO: {
      concentration: response.CO.concentration,
      aqi: response.CO.aqi
    },
    NO2: {
      concentration: response.NO2.concentration,
      aqi: response.NO2.aqi
    }
  };
  return airQuality;
};
