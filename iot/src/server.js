const five = require('johnny-five')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const date = new Date()


//Conectar com mobile Placa
//Como enviar dados? 



//Configuração do express e server
app.use(express.static(__dirname + '/public'))
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html')
})

//Conexão com a Placa arduino
five.Board().on('ready', function () {
  console.log('Board ready')


  //Esse 2 é o pino em q o botão esta ligado ao arduino
  const button = new five.Button(2)
  board.repl.inject({
    button: button
  })

  //Conexão do socket.io
  io.on('connection', function (client) {
    client.on('join', function (handshake) {
      console.log(handshake)
    })

//Tentar usar um alarme sonoro
    function handleAlarm(week_day, hour, minute) {

      if (week_day === date.getDay() && hour === date.getHours() && minute === date.getMinutes()) {
        const led = new Led(13, 5, 7);
        led.blink(500)
        button.on('press', function () {
          console.log('Led pressed')
          led.stop()
        })
      }
    }

  })
})

const port = process.env.PORT || 3000

server.listen(port)
console.log(`Servidor rodando em http://localhost:${port}`)