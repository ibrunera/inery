import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import api from '../../service/api';
import MedicineContext from '../../context/Medicine'

import '../../styles/pages/admin/update-medicine.css'

interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  compund: string;
  description: string;
  photo: string;
}

interface RouteParams {
  id: string;
}

export default function MedicineUpdate() {
  const history = useHistory()

  const medicine = useContext(MedicineContext)

  const params = useParams<RouteParams>();
 

  const [medicines, setMedicines] = useState<Medicine>()

  const [name, setName] = useState(medicines?.name)
  const [manufacturer, setManufacturer] = useState(medicines?.manufacturer)
  const [compund, setCompund] = useState(medicines?.compund)
  const [description, setDesciption] = useState(medicines?.description)

  useEffect(() => {
    api.get(`medicine/${params.id}`).then((response) => {
      setMedicines(response.data);
    });
    console.log(params.id)
  }, [params.id]);


  async function updateInfo(e : FormEvent) {
    e.preventDefault()
    await api.put(`/medicine/${params.id}`, {
      ...medicine,
      name,
      manufacturer,
      description,
      compund,
    });

    history.push('/admin/home')
  }

  return (

    <div id="create-medicine-container">
      <Sidebar />


      <main>
        <h1>Cadastro de Remédios</h1>

        <form className="medicine-form">
          <fieldset>
            <legend>Dados:</legend>

            <div className="input-group">

              <div className="input-photo">

                <div className="input-block">
                  <label htmlFor="name">Nome:</label>
                  <input
                    type="text"
                    id="name"
                    placeholder={medicines?.name}
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="manufacturer">Fabricante:</label>
                  <input
                    type="text"
                    id="manufacturer"
                    placeholder={medicines?.manufacturer}
                    value={manufacturer}
                    onChange={e => setManufacturer(e.target.value)}
                  />
                </div>
              </div>

              <div className="textarea-group">

                <div className="input-block">
                  <label htmlFor="compound">Composto:</label>
                  <textarea
                    id="compound"
                    placeholder={medicines?.compund}
                    value={compund}
                    onChange={e => setCompund(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="description">Descrição:</label>
                  <textarea
                    id="description"
                    placeholder={medicines?.description}
                    value={description}
                    onChange={e => setDesciption(e.target.value)}
                    
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <button className="confirm-button" type="button"  onClick={updateInfo}>Salvar</button>

        </form>
      </main>
    </div>
  )
}