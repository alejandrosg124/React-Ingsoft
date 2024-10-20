import React from 'react';
import CrearDocumento from '../GestionDocumentos/CrearPublicacion';
import styles from './Perfil.module.css';

const Perfil = () => {
  return (
    <div className={styles.perfilContainer}>
      <h1 className={styles.title}>
        Perfil del <span className={styles.usuario}>Usuario</span>
      </h1>
      <p>Aquí puedes gestionar tu perfil y crear nuevos documentos.</p>
      
      <CrearDocumento />
    </div>
  );
};

export default Perfil;