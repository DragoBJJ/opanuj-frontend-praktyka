export enum WeatherType {
  Sunny = 'sunny',
  Cloudy = 'cloudy',
  Rainy = 'rainy',
  Snowy = 'snowy',
}

export interface BasicDailyWeather {
  date: string;
  type: WeatherType;
}

export interface DailyWeather extends BasicDailyWeather {
  averageTemperature: number;
}

export interface USDailyWeather extends BasicDailyWeather {
  average_temperature: number;
}

interface BasicWeather {
  city: string;
  country: string;
}

export interface USLocationWeather extends BasicWeather {
  country: 'US';
  weatherDetails: {
    Weather: USDailyWeather[];
  };
}

export interface EULocationWeather extends BasicWeather {
  country: 'EU';
  weatherDetails: DailyWeather[];
}

export interface LocationWeather extends BasicWeather {
  weatherDetails: DailyWeather[];
}
