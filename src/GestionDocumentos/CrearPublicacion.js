import React, { useState } from 'react';
import styles from "./CrearPublicacion.module.css";
import crearNuevoDocumento from './ConnectCrearPublicacion';

const CrearDocumento = () => {
  //Para Categoría
  const [categoria, setCategoria] = useState('');

  // Función para manejar el cambio de categoría
  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  //Para subCategoría
  const [subCategoria, setSubCategoria] = useState('');

  // Función para manejar el cambio de categoría
  const handlesubCategoriaChange = (event) => {
    setSubCategoria(event.target.value);
  };
  
  // Estado para manejar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoDocumento = {
      titulo: event.target.TituloDoc.value,
      autores: event.target.AutoresDoc.value,
      categoria: categoria,
      subCategoria: subCategoria,
      descripcion: event.target.DescDoc.value
    };
  
    try {
      const documentoCreado = await crearNuevoDocumento(nuevoDocumento);
      console.log('Documento creado exitosamente:', documentoCreado);
      closeModal();
      // Falta crear notificación de éxito
    } catch (error) {
      console.error('Error al crear el documento:', error);
      // aca falta crear un coso mostrando un mensaje al usuario para corregirlo
    }
  };

  return (
    <div name="CrearDocumento" className={styles.crearDocumento}>
      <div className={styles.titleContainer}>
        <p>Crear un nuevo <br />
          <b>Documento</b>
        </p>
      </div>
      <button onClick={openModal} className={styles.openModalButton}>Crear nuevo documento</button>

      {isModalOpen && (
        <div className={`${styles.modalOverlay} ${isModalOpen ? styles.open : ''}`}>
          <div className={styles.modalContent}>
            <button onClick={closeModal} className={styles.closeModalButton}>X</button>
            
            <div className={styles.titleInsideContainer}>
              <p>Crear un nuevo <br />
              <b>Documento</b>
              </p>
            </div>

            <form className={styles.form} method="POST" onSubmit={handleSubmit}>
              <label htmlFor="TituloDoc">Título del Documento</label>
              <input id="TituloDoc" required name="TituloDoc" className={styles.input}></input>

              <label htmlFor="AutoresDoc">Autores</label>
              <input id="AutoresDoc" required name="AutoresDoc" className={styles.input}></input>

              <label htmlFor="categoria">Seleccionar Categoría:</label>
              <select id="categoria" value={categoria} onChange={handleCategoriaChange} required className={styles.input}>
                <option value="" disabled>Selecciona una categoría</option>
                <option value="CatIA">IA</option>
                <option value="CatGemini">Gemini</option>
                <option value="CatChatGPT">ChatGPT</option>
              </select>

              <label htmlFor="subCategoria">Seleccionar Subcategoría:</label>
              <select id="subCategoria" value={subCategoria} onChange={handlesubCategoriaChange} className={styles.input}>
                <option value="" disabled>Selecciona una Subcategoría - Opcional</option>
                <option value="Sub1">Subcategoría1</option>
                <option value="Sub2">Subcategoría2</option>
                <option value="Sub3">Subcategoría3</option>
              </select>

              <label htmlFor="DescDoc">Descripción del Documento</label>
              <textarea id="DescDoc" required className={styles.textArea}></textarea>

              <button type="submit" id="botonPublicarDocumento" className={styles.submitButton}>Publicar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );

}

export default CrearDocumento