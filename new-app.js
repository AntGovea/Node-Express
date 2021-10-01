const express = require('express')
const app = express();
const puerto = 4000;
 
app.use(express.static('public'));


app.get('/Home',(req, res)=>{
      res.sendFile(__dirname + '/public/index.html');
     res.s
      res.send('Respuesta de ruta Home'); 
    console.log('Ruta Home ');
})


app.get('*',(req, res)=>{
      res.sendFile(__dirname + '/public/404.html');
    console.log('Ruta no encontrada');
})

app.listen(puerto)
console.log("Servidor corriendo en puerto " + puerto);

