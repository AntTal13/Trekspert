import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as runsAPI from '../../utilities/runs-api';
import AddRunForm from '../../components/AddRunForm/AddRunForm';
import RunItems from '../../components/RunItems/RunItems';
import RunDetail from '../../components/RunDetail/RunDetail';
import { checkToken } from '../../utilities/users-service';
import "./RunsPage.css";

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
            setUserRuns([...userRuns, newRun])
        } catch (error) {
            console.error(error)
        } 
    }

    const sortedUserRuns = [...userRuns].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <>
        <div className="runspage">
            <div>
                <h1 className="addRunHeader">Add a Run</h1>
                <AddRunForm addRun={addRun} user={user} setUser={setUser}/>
            </div>
            <div>
                <h1 className="allRunsHeader">All Runs</h1>
                <div className="RunItemsContainer">
                    {sortedUserRuns.map((r, idx) => (
                        <Link className="none" to={`/runs/${r._id}`} key={r._id}>
                        <RunItems user={user} run={r} index={idx} key={r._id} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}