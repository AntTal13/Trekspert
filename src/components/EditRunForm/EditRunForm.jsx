import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import * as runsAPI from '../../utilities/runs-api';
import "react-datepicker/dist/react-datepicker.css";
import "./EditRunForm.css";

export default function EditRunForm({ runs }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [updatedRun, setUpdatedRun] = useState({
        date: "",
        distance: "",
        minutes: "",
        seconds: "",
    });
    
    useEffect(() => {
        const currentRun = runs.find(run => run.id === id)
        if (currentRun) {
            setUpdatedRun(currentRun)
        }
    }, [runs, id])
    
    //Guard to check if all fields are entered for form (BELOW)
    //Otherwise server crashes
    const isFormValid = updatedRun.date && updatedRun.distance && updatedRun.minutes && updatedRun.seconds;
    
    async function handleUpdatedRun(evt) {
        evt.preventDefault();
        
        const newRunDetails = {
            date: new Date(updatedRun.date),
            distance: parseFloat(evt.target.distance.value),
            minutes: parseInt(evt.target.minutes.value),
            seconds: parseInt(evt.target.seconds.value),
        }
        
        await runsAPI.updateRun(id, newRunDetails)
        
        setUpdatedRun({
            date: "",
            distance: "",
            minutes: "",
            seconds: "",
        })

        navigate(`/runs/${id}`);

        }

    return (
        <>
        <h1 className="editHeader">Edit Run</h1>
        <form className="UpdateRunForm" onSubmit={handleUpdatedRun}>
          <label> Date </label>
          <DatePicker
            selected={updatedRun.date ? new Date(updatedRun.date) : null}
            onChange={(date) => setUpdatedRun({ ...updatedRun, date })}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            />
          <label> Distance </label>
          <input
            name="distance"
            value={updatedRun.distance}
            placeholder="Miles"
            onChange={(evt) => setUpdatedRun({ ...updatedRun, distance: evt.target.value })}
            />
          <label> Minutes </label>
          <input
            name="minutes"
            value={updatedRun.minutes}
            placeholder="Minutes"
            onChange={(evt) => setUpdatedRun({ ...updatedRun, minutes: evt.target.value })}
            />
          <label> Seconds </label>
          <input
            name="seconds"
            value={updatedRun.seconds}
            placeholder="Seconds"
            onChange={(evt) => setUpdatedRun({ ...updatedRun, seconds: evt.target.value })}
            />
          <button className="updateRunButton" type="submit" disabled={!isFormValid}> UPDATE RUN </button>
        </form>
        </>
    );
}
