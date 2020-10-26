import React, { ChangeEvent, FormEvent, useState } from 'react';

import logoImg from '../assets/logo.svg'
import alarmImg from '../assets/alarm-clock 1.svg'

import '../styles/pages/create-pacient.css'
import { FiPlus } from 'react-icons/fi';
import api from '../service/api';
import { useHistory } from 'react-router-dom';

export default function CreatePacient() {
  const history = useHistory()

  const [photo, setPhoto] = useState<File[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const selectedImage = Array.from(e.target.files)

    setPhoto(selectedImage)

    const selectedPreviewImage = selectedImage.map((photo) => { return URL.createObjectURL(photo) })

    setPreviewImages(selectedPreviewImage)
  }


  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    
    photo.forEach((photo) => data.append('photo', photo))

    await api.post('/pacient', data)


    history.push('/')
  }


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
        <form className="pacient-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados:</legend>

            <div className="input-group">

              <div className="input-photo">

                <div className="input-block">
                  <label htmlFor="image">Foto:</label>
                  <div className="image-container">
                    {previewImages.map((photo) => {
                      return <img key={photo} src={photo} alt={name} />;
                    })}

                    <label htmlFor='image' className='new-image'>
                      <FiPlus size={24} color='#15b6d6' />
                    </label>
                  </div>

                  <input
                    id="image"
                    type='file'
                    onChange={handleSelectImage}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="name">Nome:</label>
                  <input
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

              </div>

              <div className="input-block-password">

                <div className="input-block">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="password">Senha:</label>
                  <input
                    id="password"
                    type="password"
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="confirm">Confirme sua senha:</label>
                  <input
                    id="confirm"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

              </div>
            </div>

          </fieldset>

          <button className="confirm-button" type="submit" >Cadastrar</button>


        </form>

      </main>
    </div>
  )
}