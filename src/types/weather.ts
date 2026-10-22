
export interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
export interface ForecastData {
  list: {
    dt_txt: string;
    main: {
    temp: number;
    humidity: number;
  };
    wind: {
      speed: number;
    };
    weather: {
      id: number;
      icon: string;
      description: string;
    }[];
  }[];
}
