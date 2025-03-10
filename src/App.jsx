import { useEffect, useState } from "react";
import History from "./History";
import "./App.css";
import SearchBar from "./SearchBar";
import WeatherCards from "./WeatherCards";

function App() {
  const API_KEY = "6ef008d9fe8f262af03c5259d16c1512";

  const [locations, setLocations] = useState([]);
  const [history, setHistory] = useState([]);
  const [validCity, setValidCity] = useState(true);

  useEffect(() => {
    const storedHistory = localStorage.getItem("weatherHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
   
      localStorage.setItem("weatherHistory", JSON.stringify(history));
    
  }, [history]);

  const fetchLocations = async (city) => {
    if (
      locations.some(
        (location) => location.city.name.toLowerCase() === city.toLowerCase()
      )
    ) {
      setValidCity(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("fetched");

      if (!response.ok) {
        setValidCity(false);
        throw new Error("Unable to fetch the data");
      }

      const data = await response.json();

      if (!locations.some((location) => location.city.id === data.city.id)) {
        setLocations((prevState) => [...prevState, data]);
        setValidCity(true);
      }

      if (!history.includes(city)) {
        setHistory((prevState) => [...prevState, city]);
        setValidCity(true);
      }
    } catch (err) {
      console.error(err);
      setValidCity(false);
    }
  };

  const removeLocation = (id) => {
    setLocations((prevState) =>
      prevState.filter((location) => location.city.id !== id)
    );
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="bg-gray-200 min-h-screen text-black p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Weather App <span className="text-sm">by Dawid Jaskólski</span>
      </h1>
      <SearchBar fetchLocations={fetchLocations} />
      <div className="flex justify-center">
        {!validCity && <p>city does not exist or name is incorrect!</p>}
      </div>
      <WeatherCards
        locations={locations}
        removeLocation={removeLocation}
      ></WeatherCards>
      <History
        history={history}
        fetchLocations={fetchLocations}
        locations={locations}
        handleClearHistory={handleClearHistory}
      />
    </div>
  );
}

export default App;
