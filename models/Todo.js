module.exports = (model, Schema) => {
    const ToDoItems = new Schema ({
        item: String,
        isDone: {
            type: Boolean,
            default: false
        }
    })
return model( 'ToDoItems', ToDoItems)
}