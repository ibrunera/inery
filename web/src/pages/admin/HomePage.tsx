import React, { useEffect, useState } from 'react';

import Sidebar from '../../components/SideBar'
import listImg from '../../assets/medical-records.svg'

import { FiTrash } from 'react-icons/fi'
import { HiPencilAlt } from 'react-icons/hi'
import { FaPlusSquare } from 'react-icons/fa'

import '../../styles/pages/admin/home.css'
import { useHistory, Link } from 'react-router-dom';
import api from '../../service/api';

interface Medicine {
  id: number;
  name: string;
  manufacturer: string;
  compund: string;
  description: string;
  photo: string;
}


export default function HomePage() {


  const history = useHistory()
  const [medicines, setMedicines] = useState<Medicine[]>([])

  useEffect(() => {
    api.get('medicine').then(({ data }) => setMedicines(data))
  }, [])

  async function handleDeleteMedicine(id: number) {
    try {
      await api.delete(`medicine/${id}`);

      setMedicines(medicines.filter(medicine => medicine.id !== id));

    } catch (error) {
      alert('Erro ao deletar caso, tente novamente!')
    }
  }

  return (
    <div id="home-container">
      <Sidebar icon='logout' />
      <div className="main-container">

        <main>
          <header>

            <div className="intro">
              <h2>Bem-vindo Administrador!</h2>
              <p>Aqui você terá controle de alguns dados.</p>
            </div>
          </header>

          <div className="container">

            <div className="title-container">
              <img src={listImg} alt="Lista de remédios" />
              <h1>Medicamentos Cadastrados</h1>


            </div>
        
              <Link to='/admin/medicine/create' className="add" >
                Adicione um medicamento
                <FaPlusSquare size={30} color="#2280FF" />
              </Link>

         
            <ul>
              {medicines.map(medicine => (
                <li key={medicine.id}>

                  <div className="name">
                    <img src={medicine.photo} alt={medicine.name} />

                    <strong>Nome:</strong>
                    <p>{medicine.name}</p>

                  </div>

                  <div className="info">
                    <strong>Fabricante:</strong>
                    <p>{medicine.manufacturer}</p>

                    <strong>Descrição:</strong>
                    <p>{medicine.description}</p>

                    <strong>Composto:</strong>
                    <p>{medicine.compund}</p>
                  </div>


                  <button type="button" className="update"
                    onClick={() => {
                      history.push(`/admin/medicine/update/${medicine.id}`)
                    }}
                  >
                    <HiPencilAlt size={24} color="#4C9C17" />
                  </button>

                  <button type="button" className="delete"
                    onClick={() => handleDeleteMedicine(medicine.id)}
                  >
                    <FiTrash size={24} color="#E43335" />
                  </button>

                </li>
              ))}
            </ul>

          </div>

        </main>
      </div>
    </div >
  )
}