import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi'

import '../../styles/pages/admin/login.css'

import logoImg from '../../assets/logo.svg'
import phoneImg from '../../assets/smartphone(1).svg'


export default function LoginPage() {
  return (

    <div id="login-container">


     <aside>
        <header>
          <img src={logoImg} alt="iNery" />
          <img src={phoneImg} alt="iNery" className="phone"/>
        </header>

      </aside>

      <main>
        <h1>Bem-vindo(a), Administrador</h1>
        <div className="login-form">

          <form>
            <fieldset>
              <legend>Login</legend>
              <div className="input-block">
                <label htmlFor="email"><FiUser size={24} /> Email: </label>
                <input type="text" id="email" />

              </div>
              <div className="input-block">
                <label htmlFor="email"><FiLock size={24} /> Senha: </label>
                <input type="password" />
              </div>

              <button className="confirm-button" >Login</button>

            </fieldset>
          </form>


        </div>
      </main>
    </div>
  )
}