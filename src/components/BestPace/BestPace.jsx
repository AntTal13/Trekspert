import { useState, useEffect } from 'react';
import * as runsAPI from '../../utilities/runs-api';
import './BestPace.css'

export default function BestPace() {
    const [userRuns, setUserRuns] = useState([]);

    useEffect(function() {
      async function runsIndex() {
        try {
          const allUserRuns = await runsAPI.getAllForUser();
          setUserRuns(allUserRuns);
        } catch (error) {
          console.error(error);
        }
      }
      runsIndex();
    }, []);
    
    const bestRunByPace = [...userRuns].sort((a, b) => a.pace.localeCompare(b.pace))
    const bestRun = bestRunByPace[0]

    if (bestRun) {
    return (
        <>
        <div className="paceDiv">
        <h1 className="bestPaceHeader">Best Pace:</h1>
        <h2 className="bestPace">{bestRun.pace} /mile</h2>
        </div>
        </>
    )
}

if (!bestRun) {
    return (
        <>
        <div className="paceDiv">
        <h1 className="bestPaceHeader">Best Pace:</h1>
        <h1 className="noPaceYet">No Runs Yet!</h1>
        </div>
        </>
    )
    }
    }