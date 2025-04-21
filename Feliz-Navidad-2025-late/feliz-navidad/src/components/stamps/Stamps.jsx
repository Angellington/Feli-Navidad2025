import Stamp from './stamp/Stamp'

import { useState } from 'react'

const Stamps = () => {
    // Guardando as imagens dos componentes
    const [image, setImages] = useState({})

    // salvando elas  em um objeto
    const handleStamptData = (id, base64) => {
        setImages((prev) => ({
            ...prev,
            [id]: base64
        }))
    }
       

    







    return (

        <div>
            <h3>Estampas</h3>
            <div className="stamps">
                <Stamp stampId='1' stampData={handleStamptData}/>
                <Stamp stampId='2' stampData={handleStamptData}/>

                {image["1"] && <img src={image["1"]} alt="Stamp 1" />}
                {image["2"] && <img src={image["2"]} alt="Stamp 2" />}
            </div>
        </div>
    )
}

export default Stamps