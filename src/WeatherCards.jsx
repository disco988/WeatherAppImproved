import Card from "./Card";

const WeatherCards = ({ locations, removeLocation }) => {
  console.log(locations);
  return (
    <div className="flex flex-wrap w-full h-full gap-10 justify-center py-10">
      {locations.map((location) => (
        <Card
          key={location.city.id}
          location={location}
          removeLocation={removeLocation}
        />
      ))}
    </div>
  );
};

export default WeatherCards;
