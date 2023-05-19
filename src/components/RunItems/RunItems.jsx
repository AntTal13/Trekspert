export default function RunItems({ run, index }) {
    return (
      <li className="RunItems">
        <>Date: {run.date}</>
        <>Distance: {run.distance}</>
        <>Minutes: {run.minutes}</>
        <>Seconds: {run.seconds}</>
      </li>
    );
}
  