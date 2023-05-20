const Run = require('../../models/run');

module.exports = {
    index,
    addRun,
    show,
    forUser
};

async function index(req, res) {
    const runs = await Run.find().populate('user');
    runs.sort((a, b) => b.date.getTime() - a.date.getTime());
    res.json(runs);
}

async function addRun(req, res) {
    const distance = req.body.distance;
    const minutes = req.body.minutes;
    const seconds = req.body.seconds;
    const userId = req.user._id;

    const newRun = new Run({
        user: userId, 
        distance: distance, 
        minutes: minutes, 
        seconds: seconds 
    });
    await newRun.save();

    await newRun.populate('user', (err) => {
        if (err) {
            return console.error('User field error', err)
        }
    })
    res.json(newRun);
}

async function show(req, res) {
    const runs = await Run.findById(req.params.id);
    res.json(runs);
}

async function forUser(req, res) {
    // get runs for the logged in user
    const userRuns = await Run.find({user: req.user._id});
    res.json(userRuns);
}