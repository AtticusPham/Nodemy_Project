module.exports = {
    // GET trello home /trello
    trelloApp: (req, res) => {
        res.json("GET /trello");
    },
    // GET trello /trello/edit/:id
    trelloAppEdit: (req, res) => {
        res.json("GET /trello/edit/:id");
    },
    // POST trello task /trello
    trelloAppCreate: (req, res) => {
        res.json("POST /trello");
    },
    // PUT trello task /trello/:id
    trelloAppUpdate: (req, res) => {
        res.json("PUT /trello/:id");
    },
    // DELETE trello task /trello/:id
    trelloAppDelete: (req, res) => {
        res.json("DELETE /trello/:id");
    }
}