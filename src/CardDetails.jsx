const CardDetails = ({ currentWeather, currentDate, location }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">{location.city.name}</p>
      <p>{currentDate}</p>
      <p>Temperature: {Math.round(currentWeather.main.temp)}°C</p>
      <p>Humidity: {currentWeather.main.humidity}%</p>
      <p>Pressure:{currentWeather.main.pressure}hPa</p>
      <p>Description: {currentWeather.weather[0].description}</p>
    </div>
  );
};

export default CardDetails;
