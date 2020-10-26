import {Led, Button, Board} from 'johnny-five'
import {Request, Response} from 'express'
import convertMinutesToHours from '../utils/convertMinutesToHours'
export default {

  async alarm(req: Request, res: Response){
    const {week_day, hour} = req.query
    const date = new Date()

    const board = new Board()
      
    const [hours, minutes] = convertMinutesToHours(Number(hour))
    console.log("week_day: ", week_day, "hours: ", hour)
    console.log("horas: ", hours, "min: ", minutes)
      board.on('ready', function(){
        const button = new Button(2)
        board.repl.inject({
          button : button
        })
        
        if(Number(week_day) === date.getDay() && hours === date.getHours() && minutes === date.getMinutes()){
          console.log("entrou Aqui")
          
          const led = new Led(13)
          led.blink(500)
          
          button.on('press', function(){
              console.log('Led pressed')
            
              led.stop(500)
              return res.sendStatus(200)
            })

          
          
        }
        
      })
    

  }
}

