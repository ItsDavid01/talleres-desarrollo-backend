const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.use(express.json());

app.get("/", async function (req, res) {
    res.status(200).json({ message: "Success"})
})

app.get("/users/hobby", async function (req, res) { //punto 1 retorne los usuarios que cuenten con el hobby enviado
    const hobby = req.query.hobby

    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        const usuarios = JSON.parse(data);
        elegidos = usuarios.filter(elem => elem.hobbies.includes(hobby))
        res.status(200).json({message: elegidos})
    })
})

app.get('/users/exists', async function (req, res) { //punto 2 retorne si existe el usuario con el codigo enviado
    const codigo = req.query.exists

    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        const usuarios = JSON.parse(data);

        elegidos = usuarios.some(elem => elem.codigo === codigo)
        res.status(200).json({message: elegidos})
    })
})

app.get('/users/hobby/count', async function (req, res) { //punto 3 retorne la cantidad de usuarios con el hobby enviado
    const hobby = req.query.hobby

    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        const usuarios = JSON.parse(data);

        elegidos = usuarios.filter(elem => elem.hobbies.includes(hobby))

        res.status(200).json({message: elegidos.length})
    })
})

app.get('/users/is-free', async function (req, res) { //punto 4 retorne los usuarios con tiempo libre (menos de 3 hobbies)
    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        const usuarios = JSON.parse(data);

        elegidos = usuarios.filter(elem => elem.hobbies.length < 3)

        res.status(200).json({message: elegidos})
    })
})

app.get('/users/suggest', async function (req, res) { //punto 5 agregue el hobby enviado al usuario enviado. En caso de que el usuario tenga 3 hobbies, no se debe agregar el hobby
    const codigo = req.query.codigo
    const hobby = req.query.hobby
    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        let usuarios = JSON.parse(data);
        elegido = usuarios.findIndex(elem => elem.codigo === codigo)

        if (usuarios[elegido].hobbies.length < 3){
            usuarios[elegido].hobbies.push(hobby)

            fs.writeFile('./24-taller-04-datos.json', JSON.stringify(usuarios, null, 2), (err) =>{
                if (err) return res.status(500).json({ error: 'Error guardando el archivo' })
            })
            res.status(200).json({ message: "Hobby añadido" })
        } else {
            res.status(200).json({message: "hobby no añadido"})
        }
    })
})

app.post('/users', (req, res) => {
    let { hobbies, codigo, apellido, nombre } = req.body

    fs.readFile('./24-taller-04-datos.json', 'utf-8', (err, data) => {
        let usuarios = JSON.parse(data)

        if (!hobbies || !codigo || !apellido || !nombre) {
            res.status(500).json({error: 'Formato json incorrecto'})
        } else {
            if (hobbies.length >= 2) {
                usuarios.push({"hobbies": hobbies, "codigo": codigo,"apellido": apellido,"nombre": nombre})

                fs.writeFile('./24-taller-04-datos.json', JSON.stringify(usuarios, null, 2), (err) => {
                    if (err) return res.status(500).json({error: "error"})
                })
                res.status(200).json({message: 'usuario añadido con exito'})
            } else {
                res.status(500).json({error: 'muy pocos hobbies para el usuario ingresado'})
            }
            
        }
    })
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




// const http = require("http");
// function requestListener(req, res) {
//     res.writeHead(200);
//     res.end("Hello, World!");
// }

// const server = http.createServer(requestListener);
// server.listen(8080);
