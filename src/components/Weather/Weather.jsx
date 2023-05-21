import "./Weather.css";

export default function Weather({ weather }) {
    if (!weather.current) {
        return
    }
    const { location, current } = weather;
    //console.log(weather)
    return (
    <>
    <div className="container">
        <div className="row">
            <h1>{location.name}</h1>
        </div>
        <div className="row">
            <div className="temperatureContainer">
                <div>{current.temp_f}°F</div>
                <img src={current.condition.icon} alt="" />
            </div>
        </div>
        <div className="row">
            <h2>{current.condition.text}</h2>
        </div>
    </div>
    </>
    );
}