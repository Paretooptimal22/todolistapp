const {ToDOItems} = require('../models')

module.exports = app =>{
    app.post ('/todo'), (req, res) => {
        ToDOItems.create(req.body)
        .then (() => res.sendStatus (200))
        .catch(e => console.error (e))
    }
}