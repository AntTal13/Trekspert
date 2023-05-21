import { useEffect, useState } from 'react';
import * as runsAPI from '../../utilities/runs-api';
import { useParams } from 'react-router-dom';

export default function RunDetail() {
    const [run, setRun] = useState(null);
    const { runId } = useParams();

    useEffect(() => {
        async function runDetails() {
            try {
                const runDetail = await runsAPI.getRunId(runId);
                setRun(runDetail);
            } catch (error) {
                console.error(error);
            }
        }
        runDetails()
    }, [runId])

    return (
        <div className="RunItemDetail">
            <div>{run.date}</div>
        </div>
    )
}