import axios from 'axios';

const crearNuevoDocumento = async (documento) => {
  try {
    const response = await axios.post('http://localhost:3000/URL APII', documento);
    console.log('Documento creado:', response.data);
    return response.data; 
  } catch (error) {
    console.error('Error al crear documento:', error);
    throw error; 
  }
};

export default crearNuevoDocumento;