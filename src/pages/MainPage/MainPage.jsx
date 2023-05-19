import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Weather from "../../components/Weather/Weather";

export default function MainPage() {
  const searchOptions = {
    key: "659853d8cd924b9aa33151640231905",
    api: "http://api.weatherapi.com/v1",
  };
  const [weather, setWeather] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [lastSearch, setLastSearch] = useState("");

  useEffect(() => {
    getWeather(searchString);
  }, []);

  function getWeather(searchString) {
    const url = `${searchOptions.api}/current.json?key=${searchOptions.key}&q=${searchString}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLastSearch(searchString);
        setSearchString("");
      })
      .catch(console.error);
  }

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getWeather(searchString);
  }

  return (
    <>
      <h1>Main Page</h1>
      <SearchHeader lastSearch={lastSearch} />
      <SearchBar
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Weather weather={weather} />
    </>
  );
}