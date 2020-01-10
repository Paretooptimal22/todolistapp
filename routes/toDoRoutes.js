const { } = require('../models')

module.exports = app => {

  //Get to do list
  app.get('/items', (req,res) => {
    Item.find()
      // .populate('goslings')
      .then(items => res.json(items))
      .catch(e => console.error(e))
  })

  //Post to do item
    app.post('/items', (req,res) => {
      Item.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
    })
  //Update to do item

  //Delete to do item
    app.delete('/items/:id', (req,res) => {
      Item.findOne({ where: {id: parseInt(req.params.id)}})
        .then(items => items.destroy())
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
    })
}