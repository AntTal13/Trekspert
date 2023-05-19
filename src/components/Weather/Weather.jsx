export default function Weather({ weather }) {
    if (!weather.current) {
        return <h2>How does it look outside?</h2>
    }
    const { location, current } = weather;
    //console.log(weather)
    return (
    <>
        <div>
            <h2>Location: {location.name}</h2>
            <h2>Current Temperature: {current.temp_f}°F</h2>
        </div>
        <div>
            <h2>{current.condition.text}</h2>
            <img src={current.condition.icon} alt=""/>
        </div>
    </>
    );
}