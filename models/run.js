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
    return this.minutes + this.seconds / 60;
})

runSchema.virtual('pace').get(function() {
    return this.totalTime / this.distance;
})



module.exports = mongoose.model('Run', runSchema);