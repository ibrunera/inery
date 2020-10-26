import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../components/SideBar';
import api from '../../service/api';

import '../../styles/pages/admin/create-medicine.css'

// Dados para cadastro de remedios -- Nome, fabricante, foto, composto, descrição.

export default function CreateMedicine() {
  const history = useHistory()

  const [photo, setPhoto] = useState<File[]>([])
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [compund, setCompund] = useState('')
  const [description, setDesciption] = useState('')
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
    data.append('manufacturer', manufacturer)
    data.append('compund', compund)
    data.append('description', description)

    photo.forEach((photo) => data.append('photo', photo))

    await api.post('/medicine', data)


    history.push('/admin/home')
  }



  return (
    <div id="create-medicine-container">
      <Sidebar />


      <main>
        <h1>Cadastro de Remédios</h1>

        <form className="medicine-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados:</legend>


            {/* foto */}
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
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="manufacturer">Fabricante:</label>
                  <input
                    type="text"
                    id="manufacturer"
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
                    value={compund}
                    onChange={e => setCompund(e.target.value)}
                  />
                </div>

                <div className="input-block">
                  <label htmlFor="description">Descrição:</label>
                  <textarea 
                  id="description" 
                  value={description}
                  onChange={e => setDesciption(e.target.value)}
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