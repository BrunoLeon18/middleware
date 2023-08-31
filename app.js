
import express from "express"
import morgan from 'morgan'


const app = express()
const PORT = 3000


app.use(morgan('tiny'))
app.use(express.json())


app.get('/users', (req,res)=> {
    const user ={
            id: "6197f7d7c1b2af0dccecdca",
            name: "Juan",
            lastname:"Perez" 
        }
    res.json({info: user})
})

app.post('/users', (req,res)=> {

    const { body } = req

    res.status(201).json({message: 'Usuario Creado', userInfo: body})
})


app.listen( PORT, ()=>{
    console.log(`Bievenido a mi servidor ${PORT}`)
})