const { error } = require("console");
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config();
const app = express()
const port = 8000
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mongotest", {useNewUrlParser: true, useUnifiedTopology: true})

const UsuarioSchema = new mongoose.Schema({
    username: String,
    password: String
    
})

const Usuarios = mongoose.model('users', UsuarioSchema);


app.get("/", async (req, res) =>{
    res.status(201).send("Holas")
})

app.get("/usuarios", async (req,res) => {
        const users = await Usuarios.find()
        res.json(users)
})

app.listen(port, () => {
    console.log(`Servidor lanzado en ${port}`)
})