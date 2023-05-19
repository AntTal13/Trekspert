import sendRequest from './send-request';
const BASE_URL = '/api/runs';

export function getAll() {
    return sendRequest(`${BASE_URL}/runs`);
}