const cors = require("cors");
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

const corsOptions = {
    origin: '*', 
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

// json parsing middleware
app.use(express.json())
id = 0;

// CRUD: Create, Read, Update, Delete

let cats = [
    {
        "id": "0",
        "name": "sandy",
        "age": 12
    },
    {
        "id": "1",
        "name": "rocky",
        "age": 8
    }
]

// create
app.post('/cat', (req, res) => {
    const newCat = {
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age
    }
    cats.push(newCat)
    res.status(201).send({ message: "cat added!", cats })
})

// read
app.get('/cats', (req, res) => {
    res.send(cats)
})

app.get('/cat/:id', (req, res) => {
    const cat = cats.find(cat => cat.id === req.params.id)
    cat ? res.send(cat) : res.status(404).send({ message: `could not find cat with id ${req.params.id}`, cats })
})

// update
app.put('/cat', (req, res) => {
    const updateCat = cats.find(cat => cat.id === req.body.id)
    if (updateCat) {
        cats = cats.map(cat => {
            if (cat.id === updateCat.id) {
                return { id: cat.id, name: req.body.name, age: req.body.age }
            } else return cat
        })
    }
    res.send({ message: "updated", cats })
})

// delete
app.delete('/cat/:id', (req, res) => {
    cats = cats.filter(cat => cat.id !== req.params.id)
    res.send({ message: `adopted cat with id ${req.params.id}`, cats })

})


app.listen(port, () => {
    console.log(`cat shelter app backend listening on port ${port} 🐈`)
})