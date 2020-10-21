import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../assets/logo-medicine.svg';
import '../styles/components/sidebar.css';

const Sidebar = () => {
  const { goBack } = useHistory();

  return (
    <aside className='app-sidebar'>
      <img src={logoImg} alt='iNery' />

      <footer>
        <button type='button' onClick={goBack}>
          <FiArrowLeft size={24} color='#FFF' />
        </button>
      </footer>
    </aside>
  );
};

export default Sidebar;