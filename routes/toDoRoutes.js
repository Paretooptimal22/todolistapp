const { ToDo } = require('../models')

module.exports = app => {

  //Get to do list
  // app.get('/todos', (req,res) => {
  //   ToDoItems.find()
  //     // .populate('goslings')
  //     .then(todos => res.json(todos))
  //     .catch(e => console.error(e))
  // })

  //Post to do item
    app.post('/todos', (req,res) => {
      ToDo.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
    })
  //Update to do item

  //Delete to do item
    // app.delete('/items/:id', (req,res) => {
    //   ToDoItems.findOne({ where: {id: parseInt(req.params.id)}})
    //     .then(todos => todos.destroy())
    //     .then(() => res.sendStatus(200))
    //     .catch(e => console.error(e))
    // })
}