import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import logoImg from '../assets/logo-medicine.svg';
import '../styles/components/sidebar.css';

interface Props {
  icon?: string;
}


const Sidebar: React.FC<Props> = (props) => {
  const { goBack } = useHistory();
  const history = useHistory()


  return (
    <aside className='app-sidebar'>
      <img src={logoImg} alt='iNery' />

      <footer>
        {
          props.icon === 'logout' ? (
            <button type='button' onClick={() => { history.push('/admin/') }}>
              <RiLogoutBoxLine size={24} color='#FFF' />
            </button>
          ) : (
              <button type='button' onClick={goBack}>
                <FiArrowLeft size={24} color='#FFF' />
              </button>
            )


        }
      </footer>
    </aside>
  );
};

export default Sidebar;