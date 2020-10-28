import { expect } from 'chai'
import api from '../services/api'


interface Alarm {
  hour : string;
}

describe('Alarm routes', () => {
  it('should create a new alarm', async()=> {
    const alarm = {
      hour : '10:50',
      weeks : [
        {
          week_day : 0,
        },
        {
          week_day : 1,
        },
        {
          week_day : 2,
        },
      ]
    }
    // console.log(alarm)
    const { data } = await api.post('/alarm/7', alarm)
    expect(data).to.be.an('object')
  })

  it('should list all recipe alarms', async() => {
    const { data } = await api.get('/alarm/7')
    const alarm = data;

    expect(alarm).to.be.an('array')
  })

  it('should update a alarm', async () => {
  
    const { data: getData } = await api.get('/alarm/2');
      const alarm: Alarm = getData;
      alarm.hour += '11:10';
      const { data } = await api.put('/alarm/2', {
        ...alarm,
      });
      expect(data)
        .to.be.an('object')
      
})

it('should delete a alarm', async () => {
    const { data } = await api.delete('/alarm/2')
    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('alarm deleted');
  })

})