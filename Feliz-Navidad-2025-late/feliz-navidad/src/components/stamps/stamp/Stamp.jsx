import { useState } from 'react';

const Stamp = ( {stampId, stampData } ) => {
    const [stamp, setStamp] = useState(null);


    // Função que lê a imagem e faz um img
    const handleChange = (e) => {
        const file = e.target.files[0];
        
        const reader = new FileReader();
        reader.onloadend = () => {
            setStamp(reader.result);

            stampData(stampId, reader.result)
        };

        if (file) {
            reader.readAsDataURL(file);
            
        }
    }

    return (
        <div className="stamp">
            <input type="file" name="" id={stampId} hidden onChange={handleChange} />

            {/* O botão de + só aparece se não houver imagem */}
            {!stamp ? (<button type='button'
                className='btn-image' onClick={() => {
                document.getElementById(stampId).click();
                console.log(stampId)
            }}>+</button>) : null}

            {/* A partir da própria imagem, dá pra selecionar novamente a função que lê*/}
            {stamp && <img src={stamp} alt="Stamp" onClick={() => {
                document.getElementById(stampId).click();
            }} /> }
            
        </div>
    )
}

export default Stamp;