import { useState, useEffect } from 'react';
import AddRunForm from '../../components/AddRunForm/AddRunForm';
import RunItems from '../../components/RunItems/RunItems';
import * as runsAPI from '../../utilities/runs-api';
import { checkToken } from '../../utilities/users-service';

export default function RunsPage({ runs, setRuns }) {
    const [userRuns, setUserRuns] = useState([]);
    
    useEffect(function() {
        async function runsIndex() {
            try {
                const allUserRuns = await runsAPI.getAllForUser();
                setUserRuns(allUserRuns);
            } catch (err) {
                console.error(err);
            }
        }
        runsIndex();
    }, []);

    async function addRun(run) {
        try {
            const newRun = await runsAPI.addNewRun(run)
            setRuns([...runs, newRun]);
        } catch (err) {
            console.error(err)
        } 
    }

    return (
        <>
        <h1>Runs Page</h1>
        <AddRunForm addRun={addRun}/>
        <h1>All Runs</h1>
        <ul className="AllRuns">
            {runs.map((r, idx) => (
                <RunItems run={r} index={idx} key={idx} />
            ))}
        </ul>
        </>
    );
}