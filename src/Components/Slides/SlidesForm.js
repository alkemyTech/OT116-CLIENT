import axios from "axios";
import React, { useState } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import "../FormStyles.css";
import Swal from 'sweetalert2'
import {CreateSlide, EditSlide} from '../../Services/slidesService'

const SlidesForm = ({slide}) => {
  const [initialSlides, setInitialSlides] = useState({
    name: slide?.name ?? '',
    description:slide?.description ?? '',
    image:slide?.image ?? '',
    order:slide?.order ?? '',
  });
  const hasSlide = !!slide
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const ShowSucessAlert = () => {
    Swal.fire(
      'Slide Creado!'
    )
  }
  const ShowLenghtError = () => {
    Swal.fire({
      title: 'Error!',
      text: 'No se puede tener menos de 4 caracteristicas',
      icon: 'error',
      confirmButtonText: 'Ok, voy a editarlo!'
    })
  }
  const CreateOrEditSlide = () =>{
    if(!hasSlide)
    (initialSlides.name.length>4)?
      CreateSlide(initialSlides)
    : ShowLenghtError()
    else {
      EditSlide(initialSlides)
    }
  }
  const SetImageShorterUrl = (e) => {
          const imageFile = e.target.files[0]
          const imageUrl = new FileReader()
          imageUrl.readAsDataURL(imageFile)
          imageUrl.onload = (e) => {
            setInitialSlides({...initialSlides, image:e.target.result})
          }
}
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className='input-field'
        type='text'
        name='name'
        required
        value={initialSlides.name}
        onChange={(e) => {
          setInitialSlides({
            ...initialSlides,
            name: e.target.value,
          })
        }}
        placeholder='Title (min 4 caracters)'
      ></input>
      <CKEditor
        editor={ClassicEditor}
        className='input-field'
        type='text'
        name='description'
        value={initialSlides.description}
        placeholder='Write some description'
        required
        onChange={(e, editor) => {
          const data = editor.getData()
          setInitialSlides({ ...initialSlides, description: data})
        }}
      />
      <input
        className='input-image'
        type='file'
        accept='image/png, image/jpg'
        id='image'
        name='image'
        required
        onChange={SetImageShorterUrl}
      />
      <button onClick={CreateOrEditSlide} className="submit-btn" type="submit">
        {hasSlide ? "Editar" : "Enviar"}
      </button>
    </form>
  );
};


export default SlidesForm;
