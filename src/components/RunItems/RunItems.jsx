import { Link } from 'react-router-dom';
import './RunItems.css'

export default function RunItems({ run, index }) {
    const newDate = new Date(run.date).toLocaleDateString();
    const newSeconds = run.seconds.toString().padStart(2, '0');
  
    const minutePace = Math.floor(run.totalTime / run.distance / 60);
    const secondPace = Math.floor(run.totalTime / run.distance % 60);
    const newPace = `${minutePace}:${secondPace.toString().padStart(2, '0')}`;
  
    return (
      <Link className='RunId' to={`/runs/${run._id}`}>
      <div className="RunItem">
        <div>Date: {newDate}</div>
        <div>Distance: {run.distance}</div>
        <div>Minutes: {run.minutes}</div>
        <div>Seconds: {newSeconds}</div>
        <div>Pace: {newPace} minutes/mile</div>
      </div>
      </Link>
    );
  }

  