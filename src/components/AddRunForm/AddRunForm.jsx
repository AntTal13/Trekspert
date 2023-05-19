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
            // date: ,
            // distance: ,
            // minutes: ,
            // seconds: ,
        })
        setNewRun({
            // date: null,
            // distance: ,
            // minutes: ,
            // seconds: ,
        })
    }

    return (
        <form className="AddRunForm" onSubmit={handleAddRun}>
          <label> Date </label>
          <input
            name="date"
            value={newRun.date}
            onChange={(evt) => setNewRun(evt.target.value)}
          />
          <label> Distance </label>
          <input
            name="distance"
            value={newRun.distance}
            onChange={(evt) => setNewRun(evt.target.value)}
          />
          <label> Minutes </label>
          <input
            name="minutes"
            value={newRun.minutes}
            onChange={(evt) => setNewRun(evt.target.value)}
          />
          <label> Seconds </label>
          <input
            name="seconds"
            value={newRun.seconds}
            onChange={(evt) => setNewRun(evt.target.value)}
          />
          <button type="submit"> ADD RUN </button>
        </form>
    );
}