import { expect } from 'chai'
import api from '../services/api'

import fs from 'fs'

interface Medicine {
  name: string;
  manufacturer: string;
  compund: string;
  description: string;
  photo: Express.Multer.File
}

describe('Testing medicine routes', async () => {
//   // it('should create a new medicine', async (done) => {
//   //   const medicine : Medicine = {
//   //     name: 'Loratadina',
//   //     manufacturer: 'Buenos Aires',
//   //     compund: 'propilenoglicol, sacarose, metilparabeno, propilparabeno, ácido cítrico, glicerol, essência de abacaxi e água purificada.',
//   //     description: 'Remédio para alergia',
//   //     photo: fs.readFileSync('/home/tgf0911/www/faculdade/inery/server/src/__test__/assets/p1.png')
//   //   }
//   //           const response = await api.post('medicine', medicine)
//   //           expect(response.status).to.equal(201)
//   //           done()
//   //   })

  it('should list all', async () => {
    const { data } = await api.get('/medicine');
    const medicine: Medicine[] = data;
    expect(medicine).to.be.an('array').to.have.length.greaterThan(0)
    
  })

  it('should list single medicine', async () => {
    const { data } = await api.get('/medicine/2');
    const medicine: Medicine = data;
    expect(medicine).to.be.an('object').to.have.property('id').to.equal(2);
    
  })

  it('should update medicine', async () => {
    const { data: getData } = await api.get('/medicine/2');
        const medicine: Medicine = getData;
        medicine.description += 'Remédio anti-alergico';
        const { data } = await api.put('/medicine/2', {
          ...medicine,
        });
        expect(data)
          .to.be.an('object')
        
  })

  it('should delete single medicine', async () => {
    const { data } = await api.delete('/medicine/5');

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('medicine deleted');
          
  })
})