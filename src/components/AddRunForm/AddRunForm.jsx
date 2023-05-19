import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddRunForm({ addRun }) {
    const [newRun, setNewRun] = useState({
        date: null,
        distance: "",
        minutes: "",
        seconds: "",
    });
    
    function handleAddRun(evt) {
        evt.preventDefault();
        addRun({
            date: newRun.date,
            distance: evt.target.distance.value,
            minutes: evt.target.minutes.value,
            seconds: evt.target.seconds.value,
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
            onChange={(evt) => setNewRun({ ...newRun, distance: evt.target.value })}
          />
          <label> Minutes </label>
          <input
            name="minutes"
            value={newRun.minutes}
            onChange={(evt) => setNewRun({ ...newRun, minutes: evt.target.value })}
          />
          <label> Seconds </label>
          <input
            name="seconds"
            value={newRun.seconds}
            onChange={(evt) => setNewRun({ ...newRun, seconds: evt.target.value })}
          />
          <button type="submit"> ADD RUN </button>
        </form>
    );
}