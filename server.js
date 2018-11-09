var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

let database = {
    users: [
        {id: 1, password: "asd", email: "a@a.com"},
        {id: 2, password: "sdsdd", email: "a@ass.com"},
        {id: 3, password: "asdasdad", email: "ssa@a.com"},
        {id: 4, password: "asdasdad", email: "ssa@a.com"},
    ]
}


app.get('/', function (req, res) {
    res.send(database)
})

app.get('/user/:userid', function (req, res) {
    var userId = req.param('userid')
    for (let i = 0; i < database.users.length; i++) {
        console.log(database.users[i].id, userId)
        if (database.users[i].id === +userId) {
            res.send([database.users[i]])
            return
        }
    }
    res.send({})

})

app.listen(3000)

