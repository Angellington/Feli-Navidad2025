import Stamp from './stamp/Stamp'

import { useState } from 'react'

const Stamps = ( { onChange }) => {
    // Guardando as imagens dos componentes
    const [images, setImages] = useState({})

    // salvando elas  em um objeto
    const handleStamptData = (id, base64) => {
        const updatedImages = {
            ...images,
            [id]: base64
        }

        // Agora vou colocar esse updatedImages no onChange, para levar para o pai
        onChange(updatedImages)
        setImages(updatedImages)
    


    }
    return (

        <div className='stamps-container'>
            <h3 className='stamp-text'>Estampas</h3>
            <div className="stamps">
                <Stamp stampId='1' stampData={handleStamptData}/>
                <Stamp stampId='2' stampData={handleStamptData}/>
                <Stamp stampId='3' stampData={handleStamptData}/>
                <Stamp stampId='4' stampData={handleStamptData}/>
            </div>
        </div>
    )
}

export default Stamps