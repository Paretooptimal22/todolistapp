const {model, Schema} = require ('mongoose')

const ToDo =  require('./Todo.js') (model, Schema)

module.exports = { ToDo } 