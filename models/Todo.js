module.exports = (model, Schema) => {
    const ToDo = new Schema ({
        item: String,
        isDone: {
            type: Boolean,
            default: false
        }
    })
return model( 'ToDo', ToDo)
}