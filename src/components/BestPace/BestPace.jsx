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
    
    const bestRunByPace = [...userRuns].sort((a, b) => {
        //split string at ":" and assign to an array that holds minutes and seconds
        //as we map, convert those strings to numbers so we can calculate similarly
        //to how we did in the model
        //on the return I will need a way to sort in ascending order 
        const [aMinutes, aSeconds] = a.pace.split(':').map(Number);
        const [bMinutes, bSeconds] = b.pace.split(':').map(Number);
      
        //similar to virtuals in model
        const aTotalTime = (aMinutes * 60) + aSeconds;
        const bTotalTime = (bMinutes * 60) + bSeconds;
      
        return aTotalTime - bTotalTime;
      });
      
      const bestRun = bestRunByPace[0];

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

    }