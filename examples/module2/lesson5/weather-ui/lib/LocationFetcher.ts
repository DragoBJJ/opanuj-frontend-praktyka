import axios from 'axios';
import {
  EULocationWeather,
  LocationWeather,
  USLocationWeather,
} from '../models/LocationWeather';
import { WeatherRequest } from '../models/WeatherRequest';
import { mapWeatherData } from './LocationMapper';
import { parseLocation } from './LocationParser';

async function getWeatherData(
  request: WeatherRequest
): Promise<EULocationWeather | USLocationWeather> {
  const { data } = await axios.get<EULocationWeather | USLocationWeather>(
    `/api/weather?city=${request.city}&country=${request.country}`
  );
  return data;
}

export async function fetchWeather(
  locationQuery: string
): Promise<LocationWeather | null> {
  const request = parseLocation(locationQuery);

  if (!request) return null;

  try {
    const data = await getWeatherData({
      city: request.city,
      country: request.country,
    });
    if (data.country === 'US') {
      return {
        ...data,
        weatherDetails: mapWeatherData(data.weatherDetails.Weather),
      };
    }
    return data;
  } catch {
    throw new Error(
      `Cannot fetch weather data for provided location: ${request.city}, ${request.country}`
    );
  }
}
