import Pacient from '../models/Pacient'

export default {
  render(pacient: Pacient) {
    return {
      id: pacient.id,
      name: pacient.name,
      email : pacient.email,
      cpf : pacient.cpf,
      photo : `http://localhost:3333/uploads/${pacient.photo}`,
    }
  },

  renderMany (pacients : Pacient[]) {
    return pacients.map(pacient => this.render(pacient))
  }
}