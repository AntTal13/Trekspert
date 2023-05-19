export default function Weather({ weather }) {
    const { location, current } = weather;
  
    return (
      <div>
        <h1>Weather</h1>
        <h2>Location: {location.name}</h2>
        <h2>Current Temperature: {current.temp_f}°F</h2>
      </div>
    );
}