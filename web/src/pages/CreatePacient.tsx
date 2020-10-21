import React from 'react';

import logoImg from '../assets/logo.svg'
import alarmImg from '../assets/alarm-clock 1.svg'

import '../styles/pages/create-pacient.css'
import { FiPlus } from 'react-icons/fi';

export default function CreatePacient() {
  return (
    <div id="create-pacient-container">
      <aside>
        <header>
          <img src={logoImg} alt="iNery" />

          <h2>Nosso app possibilita com que voce crie alarmes para seus remédios pós-cirurgicos.</h2>

          <p>Assim voce não precisa se preocupar em esquece-los.</p>

        </header>

        <footer>
          <strong>Quando o alarme toca é só tomar.</strong>

          <img src={alarmImg} alt="Alarme" />

        </footer>
      </aside>


      <main>
        <h2>Venha fazer parte desta inovação!</h2>
        <form className="pacient-form">
          <fieldset>
            <legend>Dados:</legend>

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
                  <input id="name" />
                </div>

              </div>

              <div className="input-block-password">

                <div className="input-block">
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" />
                </div>

                <div className="input-block">
                  <label htmlFor="password">Senha:</label>
                  <input id="password" />
                </div>

                <div className="input-block">
                  <label htmlFor="confirm">Confirme sua senha:</label>
                  <input id="confirm" />
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