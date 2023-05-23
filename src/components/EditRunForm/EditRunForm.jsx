import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EditRunForm.css";

export default function EditRunForm({ runs, user }) {
    const { id } = useParams();
    const [updatedRun, setUpdatedRun] = useState({
        date: null,
        distance: "",
        minutes: "",
        seconds: "",
    });

    useEffect(() => {
        const currentRun = runs.find(run => run.id === id)
        if (currentRun) {
            setUpdatedRun(currentRun)
        }
    }, [])
    
    //Guard to check if all fields are entered for form (BELOW)
    //Otherwise server crashes
    const isFormValid = updatedRun.date && updatedRun.distance && updatedRun.minutes && updatedRun.seconds;
    
    function handleUpdatedRun(evt) {
        evt.preventDefault();
        
        const newRunDetails = {
            user: user._id,
            date: updatedRun.date,
            distance: parseFloat(evt.target.distance.value),
            minutes: parseInt(evt.target.minutes.value),
            seconds: parseInt(evt.target.seconds.value),
        }

        const updatedRuns = runs.map(run => {
            if (run.id === updatedRun.id) {
              return newRunDetails;
            }
            return run;
        });
        
        setUpdatedRun(updatedRuns);
        
        setUpdatedRun({
            date: null,
            distance: "",
            minutes: "",
            seconds: "",
        })
        }

    return (
        <form className="UpdateRunForm" onSubmit={handleUpdatedRun}>
          <label> Date </label>
          <DatePicker
            selected={updatedRun.date}
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
    );
}
