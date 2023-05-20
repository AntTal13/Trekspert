import { useState, useEffect } from 'react';
import * as runsAPI from '../../utilities/runs-api';
import AddRunForm from '../../components/AddRunForm/AddRunForm';
import RunItems from '../../components/RunItems/RunItems';
import { checkToken } from '../../utilities/users-service';

export default function RunsPage({ user, setUser, runs, setRuns }) {
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

    async function addRun(run) {
        try {
            const newRun = await runsAPI.addNewRun(run)
            setRuns([...runs, newRun]);
        } catch (error) {
            console.error(error)
        } 
    }

    return (
        <>
        <h1>Runs Page</h1>
        <AddRunForm addRun={addRun} user={user} setUser={setUser}/>
        <h1>All Runs</h1>
        <ul className="AllRuns">
            {runs.map((r, idx) => (
                <RunItems user={user} run={r} index={idx} key={idx} />
            ))}
        </ul>
        </>
    );
}