import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../../components/SideBar';

import '../../styles/pages/admin/create-medicine.css'

// Dados para cadastro de remedios -- Nome, fabricante, foto, composto, descrição.

export default function CreateMedicine() {
  return (
    <div id="create-medicine-container">
      <Sidebar />


      <main>
        <h1>Cadastro de Remédios</h1>

        <form className="medicine-form">
          <fieldset>
            <legend>Dados:</legend>


            {/* foto */}
            <div className="input-group">

              <div className="input-photo">

                <div className="input-block">
                  <label htmlFor="image">Foto:</label>
                  <div className="image-container">
                    <label htmlFor='image' className='new-image'>
                      <FiPlus size={24} color='#15b6d6' />
                    </label>
                  </div>

                  <input id="image" type='file' />
                </div>

                <div className="input-block">
                  <label htmlFor="name">Nome:</label>
                  <input type="text" id="name" />
                </div>

                <div className="input-block">
                  <label htmlFor="manufacturer">Fabricante:</label>
                  <input type="text" id="manufacturer" />
                </div>
              </div>

              <div className="textarea-group">
                <div className="input-block">
                  <label htmlFor="compound">Composto:</label>
                  <textarea id="compound" />
                </div>

                <div className="input-block">
                  <label htmlFor="description">Descrição:</label>
                  <textarea id="description" />
                </div>
              </div>
            </div>
          </fieldset>
          <button className="confirm-button" >Cadastrar</button>

        </form>
      </main>
    </div>
  )
}