const express = require('express');
const router = express.Router();
const {trelloApp, trelloAppEdit, trelloAppCreate, trelloAppUpdate, trelloAppDelete} = require("../controllers/trello");

// GET trello home /trello
router.get('/', trelloApp);
// GET trello /trello/edit/:id
router.get('/edit/:id', trelloAppEdit);
// POST trello task /trello
router.post('/', trelloAppCreate);
// PUT trello task /trello/:id
router.put('/:id', trelloAppUpdate);
// DELETE trello task /trello/:id
router.delete('/:id', trelloAppDelete);

module.exports = router;