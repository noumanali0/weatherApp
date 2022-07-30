import react, { useState, useEffect } from "react";
import axios from "axios";

const Apidata = () => {
  const [currentData, setCurrentData] = useState("Karachi");
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentData}&units=metric&appid=07eb6316f957f1516cd3031287830ff2`
      );
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson);
    };
    getData();
  }, [currentData]);

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type="text"
            style={{
              height: "30px",
              borderRadius: "20px",
              outline: "none",
              textAlign: "center",
            }}
            placeholder="Enter city"
            onChange={(e) => {
              setCurrentData(e.target.value);
            }}
          />
          {!city ? (
            <h3>no data found</h3>
          ) : (
            <>
              <h1 className="heading">{currentData}</h1>
              <h1 className="temp">{city.temp}</h1>
              <h3 className="Minmax">
                Min {city.temp_min} | Max {city.temp_max}
              </h3>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Apidata;
