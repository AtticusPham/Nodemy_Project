const express = require('express');
const router = express.Router();

// GET trello home /trello
router.get('/', (req, res) => {
    res.json("GET /trello");
})
// GET trello /trello/edit/:id
router.get('/edit/:id', (req, res) => {
    res.json("GET /trello/edit/:id");
})
// POST trello task /trello
router.post('/', (req, res) => {
    res.json("POST /trello");
})
// PUT trello task /trello/:id
router.put('/:id', (req, res) => {
    res.json("PUT /trello/:id");
})
// DELETE trello task /trello/:id
router.delete('/:id', (req, res) => {
    res.json("DELETE /trello/:id");
})

module.exports = router;