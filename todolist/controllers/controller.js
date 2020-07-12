const TaskModel = require('../models/task');

module.exports = {
    // GET homepage todolist /todolist
    getTodolist:  (req, res) => {
        TaskModel.find({}).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // POST task to todolist /todolist
    createTask: (req, res) => {
        TaskModel.create(req.body).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // Put task in todolist /todolist/:id
    updateTask: (req, res) => {
        TaskModel.updateOne({
            _id: req.params.id
        },{
            description: req.body.description
        }).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);});
    },
    // DELETE task in todolist /todolist/:id
    deleteTask: (req, res) => {
        TaskModel.deleteOne({
            _id: req.params.id
        }).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);});
    }
}