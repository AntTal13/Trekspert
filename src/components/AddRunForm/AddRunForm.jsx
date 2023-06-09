import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddRunForm.css";

export default function AddRunForm({ addRun, user }) {
    const [newRun, setNewRun] = useState({
        date: null,
        distance: "",
        minutes: "",
        seconds: "",
    });
    
    //Guard to check if all fields are entered for form (BELOW)
    //Otherwise server crashes
    const isFormValid = newRun.date && newRun.distance && newRun.minutes && newRun.seconds;

    function handleAddRun(evt) {
        evt.preventDefault();
        
        addRun({
            user: user._id,
            date: newRun.date.toISOString(),
            distance: parseFloat(evt.target.distance.value),
            minutes: parseInt(evt.target.minutes.value),
            seconds: parseInt(evt.target.seconds.value),
        })
        setNewRun({
            date: null,
            distance: "",
            minutes: "",
            seconds: "",
        })
    }

    return (
        <form className="AddRunForm" onSubmit={handleAddRun}>
          <label> Date </label>
          <DatePicker
            selected={newRun.date}
            onChange={(date) => setNewRun({ ...newRun, date })}
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
          />
          <label> Distance </label>
          <input
            name="distance"
            value={newRun.distance}
            placeholder="Miles"
            onChange={(evt) => setNewRun({ ...newRun, distance: evt.target.value })}
          />
          <label> Minutes </label>
          <input
            name="minutes"
            value={newRun.minutes}
            placeholder="Minutes"
            onChange={(evt) => setNewRun({ ...newRun, minutes: evt.target.value })}
          />
          <label> Seconds </label>
          <input
            name="seconds"
            value={newRun.seconds}
            placeholder="Seconds"
            onChange={(evt) => setNewRun({ ...newRun, seconds: evt.target.value })}
          />
          <button className="addRunButton" type="submit" disabled={!isFormValid}> ADD RUN </button>
        </form>
    );
}