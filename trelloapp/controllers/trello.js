const TaskModel = require('../models/task');

module.exports = {
    // GET trello home /trello
    trelloApp: (req, res) => {
        TaskModel.find().
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // GET trello /trello/edit/:id
    trelloAppEdit: (req, res) => {
        TaskModel.find({
            _id: req.params.id
        }).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // POST trello task /trello
    trelloAppCreate: (req, res) => {
        TaskModel.create(req.body).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // PUT trello task /trello/:id
    trelloAppUpdate: (req, res) => {
        TaskModel.updateOne({
            _id: req.params.id
        },{
            title: req.body.title,
            description: req.body.description
        }).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    },
    // DELETE trello task /trello/:id
    trelloAppDelete: (req, res) => {
        TaskModel.deleteOne({
            _id: req.params.id
        }).
        then(result => {res.json(result)}).
        catch(err => {console.log(err);})
    }
}