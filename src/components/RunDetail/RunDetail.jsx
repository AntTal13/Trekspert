import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as runsAPI from '../../utilities/runs-api';
import './RunDetail.css'

export default function RunDetail() {
    const [run, setRun] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

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

    async function handleDelete() {
        try {
            await runsAPI.deleteRun(id);
            navigate('/runs');
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit() {
        navigate(`/runs/${id}/edit`)
    }

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
                <div>Distance: {run.distance} mile(s)</div>
                <div>Minutes: {run.minutes}</div>
                <div>Seconds: {newSeconds}</div>
                <div>Pace: {newPace} / mile</div>
            </div>
            <button className="Edit" onClick={handleEdit}>EDIT</button>
            <button className="Delete" onClick={handleDelete}>DELETE</button>
            </>
        )
        }
    }