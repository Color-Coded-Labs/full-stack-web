const cors = require('cors');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

const mongoose = require("mongoose");
const Cat = require("./Cat");

const uri = "";
mongoose.connect(uri);

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));

// json parsing middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'frontend')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})

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
app.post('/cat', async (req, res) => {
    const { name, age } = req.body;
    if (name && age) {
        const newCat = await Cat.create({ name, age });
        res.status(201).send({ message: "cat added!", newCat })
    } else {
        res.status(400).send({ message: "malformed request: name and age properties expected", request: req.body })
    }
})

// read
app.get('/cats', async (req, res) => {
    const allCats = await Cat.find();
    res.send(allCats)
})

app.get('/cat/:id', async (req, res) => {
    // const cat = cats.find(cat => cat.id === req.params.id)
    const cat = await Cat.findById(req.params.id);
    cat ? res.send(cat) : res.status(404).send({ message: `could not find cat with id ${req.params.id}` })
})

// update
app.put('/cat', async (req, res) => {
    const { id, name, age } = req.body;
    const cat = { name, age };
    await Cat.findByIdAndUpdate(id, cat);
    res.send({ message: "updated" })
})

// delete
app.delete('/cat/:id', async (req, res) => {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id)
    if (!deletedCat) {
        res.status(404).send(`unable to find and delete cat with id ${req.params.id}.`);
    } else {
        res.send("successfully deleted cat", deletedCat);
    }
})


app.listen(port, () => {
    console.log(`cat shelter app backend listening on port ${port} 🐈`)
})