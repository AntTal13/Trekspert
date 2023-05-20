export default function RunItems({ run, index }) {
    const newDate = new Date(run.date).toLocaleDateString();
    
    return (
      <li className="RunItems">
        <>Date: {newDate}</>
        <>Distance: {run.distance}</>
        <>Minutes: {run.minutes}</>
        <>Seconds: {run.seconds}</>
        <>Pace: {run.pace} minutes/mile</>
      </li>
    );
}
  