const {ToDo} = require('../models')

module.exports = app =>{
    app.post('/todos', (req, res) => {
        console.log('ping')
        ToDo.create(req.body)
        .then (() => res.sendStatus (200))
        .catch(e => console.error (e))
    })
}