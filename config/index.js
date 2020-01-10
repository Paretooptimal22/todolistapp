module.exports = require ('mongoose').connect ( 'mongodb://localhost/todolist',{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
