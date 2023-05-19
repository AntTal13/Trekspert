import AddRunForm from '../../components/AddRunForm/AddRunForm';
import RunItems from '../../components/RunItems/RunItems';
import { checkToken } from '../../utilities/users-service';

export default function RunsPage({ runs, setRuns }) {
    function addRun(run) {
        setRuns([...runs, run]);
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