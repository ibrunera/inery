import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../assets/logo.svg'
import 'landing.css'

export default function LandingPage() {
  return (
    <div id="landing-container">
      <div className="content-wrapper">
        <img src={logoImg} alt="iNery" />

        <main>
          <h1>Não esqueça de tomar seus remédios!</h1>
          <p>Tenha os horários na pal,a as suas mãos.</p>
        </main>
        <Link to='' className="enter-app">
          <FiArrowRight size={26} color='#fff' />
        </Link>

      </div>
    </div>
  )
}