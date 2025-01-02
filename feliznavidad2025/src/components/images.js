import React, { useState } from 'react';
import '../styles/images.css'
import AddIcon from '@mui/icons-material/Add';

const ImageUploader = () => {
  // Estado para armazenar as imagens selecionadas
  const [images, setImages] = useState([null, null, null, null]);

  // Função para lidar com a mudança de imagens
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
    }
  };

  return (
    <div className="images">
      {/* {images.map((image, index) => (
        <div key={index} className="custom-file-upload">
          <input
            type="file"
            onChange={(e) => handleImageChange(e, index)}
            id={`file-${index}`}
            style={{ display: 'none' }} // Escondendo o input real
          />
          <label htmlFor={`file-${index}`} className="upload-label">
            <i className="fas fa-upload"></i>+
          </label>

          {image && <img src={image} alt={`Imagem ${index + 1}`} style={{ width: '100px', margin: '10px' }} />}
        </div>
      ))} */}

      {images.map((image, index) => (
        <div key={index} className='upload-prev'>
            <input type='file' onChange={(e) => handleImageChange(e, index)}
            id={`file-${index}`} style={({ display: 'none' })}/>

              <label htmlFor={`file-${index}`} className="upload-label">
                {image ? (
                <img
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    style={{
                        width: '100%', height: '100%', borderRadius: '12px',
                    }}
                />
                ) : (
                <span>+</span> // Ícone de adicionar imagem
                )}
            </label>

             {image && <img src={image} alt={`Imagem ${index + 1}`}
             style={{ width: '100%', height: '100%', borderRadius: '12px'}}
             
             />}

        </div>
      ))}
    </div>
  );
};

export default ImageUploader;
