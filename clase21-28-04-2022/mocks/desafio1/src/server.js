import express, { json, urlencoded } from 'express'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

const nombres = ['Jorge','Camila','Eduardo','Ricardo']
const apellidos = ['Alvarez','Pieres','Bezzola','Mei']
const colores =['amarillo','azul','rojo','blanco','azul']

app.get('/test', (req, res) => {
  const users = []
  for (let i = 0; i <10; i++) {
    const user = {
      nombre: nombres[Math.round(Math.random() *(nombres.length-1))],
      apellidos: apellidos[Math.round(Math.random() *(apellidos.length-1))],
      colores: colores[Math.round(Math.random() *(colores.length-1))]
    }
    users.push(user)
  }
  res.status(200).json({usuarios:users})
})


const PORT = 3001

const server = app.listen(PORT, () => {
  console.log('🔥 Servidor en localhost:3001') 
})
server.on('error',(err)=>console.log(err)
)