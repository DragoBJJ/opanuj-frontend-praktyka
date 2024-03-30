import { USLocationWeather } from '../models/LocationWeather';

export const mapDate = (date: string) => {
  const parts = date.split('-');
  return (
    parts[1].padStart(2, '0') + '-' + parts[0].padStart(2, '0') + '-' + parts[2]
  );
};

export const mapWeatherData = (
  data: USLocationWeather['weatherDetails']['Weather']
) => {
  return data.map((item) => {
    return {
      ...item,
      date: mapDate(item.date),
      averageTemperature: item.average_temperature,
    };
  });
};
