export default function Weather({ weather }) {
    if (!weather.current) {
        return <h2>How does it look outside?</h2>
    }
    const { location, current } = weather;
    //console.log(weather)
    return (
    <>
        <div>
            <h1>Location: {location.name}</h1>
            <h2>Current Temperature: {current.temp_f}°F</h2>
        </div>
        <div>
            <h1>{current.condition.text}</h1>
            <img src={current.condition.icon} alt=""/>
            <h6>Time: {location.localtime}</h6>
        </div>
    </>
    );
}