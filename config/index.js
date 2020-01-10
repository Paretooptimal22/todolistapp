module.exports = require ('mongoose').connect('mongodb://localhost/todolistdb',{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
