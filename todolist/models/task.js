const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    date: {
        type: Date,
        default: Date.now()
    }
},{collection: 'tasks'})

module.exports = mongoose.model('task', TaskSchema);