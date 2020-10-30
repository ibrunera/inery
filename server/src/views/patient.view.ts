import Patient from '../models/Patient'

export default {
  render(patient: Patient) {
    return {
      id: patient.id,
      name: patient.name,
      email : patient.email,
      cpf : patient.cpf,
      photo : `http://localhost:3333/uploads/${patient.photo}`,
    }
  },

  renderMany (patients : Patient[]) {
    return patients.map(patient => this.render(patient))
  }
}