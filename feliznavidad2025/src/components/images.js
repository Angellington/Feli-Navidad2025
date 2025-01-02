import React, { useState } from 'react'

const ImagesPut = () => {
    const [images, setImages] = useState([null, null, null, null]);

    const handleImageChange = (e, index) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(e.target.files[0]);
        setImages(newImages);
    };

    return (
        <div>
            <input type="file" onChange={(e) => handleImageChange(e, 0)} />
            <input type="file" onChange={(e) => handleImageChange(e, 1)} />
            <input type="file" onChange={(e) => handleImageChange(e, 2)} />
            <input type="file" onChange={(e) => handleImageChange(e, 3)} />
            <div>
                {images.map((image, index) => 
                image ? <img key={index} src={image} alt={`Foto ${index + 1}`} style={{ width: '100px', margin: '10px' }} /> : null
                )}
            </div>
        </div>
    );
  }
  
  export default ImagesPut;
  