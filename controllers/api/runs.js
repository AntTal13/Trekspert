const Run = require('../../models/run');

module.exports = {
    index,
    addRun
};

async function index(req, res) {
    const runs = await Run.find();
    runs.sort((a, b) => b.date.getTime() - a.date.getTime());
    res.json(runs);
}

async function addRun(req, res) {
    const distance = req.body.distance;
    const minutes = req.body.minutes;
    const seconds = req.body.seconds;

    const newRun = new Run({ distance: distance, minutes: minutes, seconds: seconds });
    await newRun.save();
    res.json(newRun);
}