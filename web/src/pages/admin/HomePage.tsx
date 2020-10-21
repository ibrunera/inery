import React from 'react';

import Sidebar from '../../components/SideBar'
import listImg from '../../assets/medical-records.svg'
import pillsImg from '../../assets/pills.svg'

import '../../styles/pages/admin/home.css'

export default function HomePage() {
  return (
    <div id="home-container">
      <Sidebar />
      <div className="main-container">

        <main>
          <div className="intro">
            <h2>Bem-vindo Administrador!</h2>
            <p>Aqui você terá controle de alguns dados.</p>
          </div>

          <div className="container">

            <div className="list-page">
              <img src={listImg} alt="Lista de remédios" />

              <p>Lisa de remédios já cadastrados.</p>
            </div>

            <div className="create-page">
              <img src={pillsImg} alt="Cadastrar remédios" />

              <p>Cadastre remédios.</p>

            </div>

          </div>

        </main>
      </div>
    </div>
  )
}