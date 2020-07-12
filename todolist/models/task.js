const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    description: String,
    image: [String],
    timeCreate: Date
},{collection: 'tasks'})

module.exports = mongoose.model('task', TaskSchema);