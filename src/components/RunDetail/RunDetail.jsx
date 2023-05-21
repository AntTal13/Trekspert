import { useEffect, useState } from 'react';
import * as runsAPI from '../../utilities/runs-api';

export default function RunDetail({ runId }) {
    const [run, setRun] = useState(null);

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
            <h1>Detail</h1>
        </div>
    )
}