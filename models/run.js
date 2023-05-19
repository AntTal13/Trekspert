const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runSchema = new Schema({
    date: { type: Date, default: Date.now },
    distance: { type: Number, required: true },
    minutes: { type: Number, required: true },
    seconds: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Run', runSchema);