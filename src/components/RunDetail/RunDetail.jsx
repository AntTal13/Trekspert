import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as runsAPI from '../../utilities/runs-api';
import './RunDetail.css'

export default function RunDetail() {
    const [run, setRun] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function runDetails() {
            try {
                const runDetail = await runsAPI.getRunId(id);
                setRun(runDetail);
            } catch (error) {
                console.error(error);
            }
        }
        runDetails()
    }, [])

    if (run) {
        const newDate = new Date(run.date).toLocaleDateString();
        const newSeconds = run.seconds.toString().padStart(2, '0');
  
        const minutePace = Math.floor(run.totalTime / run.distance / 60);
        const secondPace = Math.floor(run.totalTime / run.distance % 60);
        const newPace = `${minutePace}:${secondPace.toString().padStart(2, '0')}`;
  
        return (
            <>
            <div className="RunDetailHeader">
                <h1>Run Info</h1>
            </div>
            <div className="RunDetail">
                <div>Date: {newDate}</div>
                <div>Distance: {run.distance}</div>
                <div>Minutes: {run.minutes}</div>
                <div>Seconds: {newSeconds}</div>
                <div>Pace: {newPace} minutes/mile</div>
            </div>
            <button className="Edit">EDIT</button>
            <button className="Delete">DELETE</button>
            </>
        )
        }
    }