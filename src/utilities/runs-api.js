import sendRequest from './send-request';
const BASE_URL = '/api/runs';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addNewRun(run) {
    return sendRequest(`${BASE_URL}`, 'POST', run);
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}