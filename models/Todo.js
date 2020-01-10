module.exports = (model, Schema) => {
    const ToDoItems = new Schema ({
        item: String,
        isDone: Boolean
    })
return Model( 'ToDoItems', ToDoItems)
}