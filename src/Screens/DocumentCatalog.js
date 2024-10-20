import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DocumentCatalog.module.css';

const DocumentCatalog = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('URL_DE_Laaa_APIIiiiiiii/documents');
        setDocuments(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error en fetching de documentos');
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div name="DocumentCatalog" className={styles.catalogContainer}>
      <h2 className={styles.catalogTitle}>
        Document <br />
        <b>Catalog</b>
        </h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search documents..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.largeBox}>
        {loading && <div>Cargando...</div>}
        {error && <div>{error}</div>}
        {documents.length === 0 && !loading && <div>No hay documentos disponibles.</div>}
        {documents.length > 0 && (
          <ul className={styles.documentList}>
            {documents.map((doc) => (
              <li key={doc.id} className={styles.documentItem}>
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
                <p>{doc.autor}</p>
                <p>{doc.nroDescargas}</p>
                <p>{doc.nroVisualizaciones}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DocumentCatalog;