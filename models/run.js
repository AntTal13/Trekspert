const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    distance: { type: Number, required: true },
    minutes: { type: Number, required: true },
    seconds: { type: Number, required: true },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

runSchema.virtual('totalTime').get(function() {
    return (this.minutes * 60) + this.seconds;
})

runSchema.virtual('pace').get(function() {
    const minutePace = Math.floor(this.totalTime / this.distance / 60);
    const secondPace = Math.floor(this.totalTime / this.distance % 60);
    return `${minutePace}:${secondPace}`
})



module.exports = mongoose.model('Run', runSchema);