export type AirQuality = {
  overall_aqi: number;
  CO: {
    concentration: number;
    aqi: number;
  };
  NO2: {
    concentration: number;
    aqi: number;
  };
};

export type Airport = {
  icao: string;
  iata: string;
  name: string;
  city: string;
  region: string;
  country: string;
  latitude: string;
  longitude: string;
  airQuality?: AirQuality; 
};

export type Register = {
  date: Date;
  airports: Airport[];
};
