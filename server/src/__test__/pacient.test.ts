import { expect } from 'chai'
import api from '../services/api'

// import fs from 'fs'

interface Patient {
  name: string;
  email: string;
  cpf: string;
  password: string;
  photo: string;
}

describe('Testing pacient routes', () => {


  //   it('Should register', async (done) => {
  //     const patient = {
  //       name: 'Thais Gennari',
  //       email: 'thaisgenn@gmail.com',
  //       cpf: '50808582888',
  //       password: 'thais',
  //       photo: fs.readFileSync('/home/tgf0911/www/faculdade/inery/server/src/__test__/assets/p1.png')
  //     }
  //     console.log(patient)
  //     const response = await api.post('patient', patient)
  //     expect(response.status).to.equal(201)
  //     done()
  //   })

  it('should list all', async (done) => {
    const { data } = await api.get('/patient/');
    const patient: Patient[] = data;
    expect(patient).to.be.an('Array')
     done()
  })


  it('should list single patient', async () => {
    const { data } = await api.get('/patient/2');
    const patient: Patient = data;
    expect(patient).to.be.an('object').to.have.property('id').to.equal(2);
  })


  it('Should update a patient', async () => {
    const { data: getData } = await api.get('/patient/2');
    const patient: Patient = getData;
    patient.password += 'novasenha';
    const { data } = await api.put('/patient/2', {
      ...patient,
    });
    expect(data)
      .to.be.an('object')
  })

  it('Should Delete a Patient', async (done) => {
    const { data } = await api.delete('/patient/5');

    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('pacient deleted');
          done()
  })

})

