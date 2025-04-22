import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import '../styles/css/feliznavidad.css'

// import das imagens em uma lista
import Img1 from '../assets/backrandom/image1.png'
import Img2 from '../assets/backrandom/image2.png'
import Img3 from '../assets/backrandom/image3.png'
import Img4 from '../assets/backrandom/image4.png'
import Img5 from '../assets/backrandom/image5.png'
import Img6 from '../assets/backrandom/image6.png'
import Img7 from '../assets/backrandom/image7.png'
import Img8 from '../assets/backrandom/image8.png'


const FelizNavidad = () => {
    // Lista das imagens
    const images_list = [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 ];

    let rand = Math.floor(Math.random() * images_list.length);


    const location = useLocation();
    const navigate = useNavigate();

    const { stamps } = location.state || {}; // Desestruturação do state, caso não tenha, será undefined

    const handleClick = () => {
        navigate("/");
    }

  return (
    <div>
        <article className="container-image">
            <img src={images_list[rand]} alt="Imagem 1" />
        </article>

        <button onClick={handleClick}>VOLTAR</button>



        {/* <h2>Feliz Navidad 2025</h2>
        <button onClick={handleClick}>VOLTAR</button>
        <article>
            <h3>Imagens Recebidas</h3>
            {stamps && Object.entries(stamps).map(([id, base64]) => (
                <div key={id}>
                    <h4>Imagem {id}</h4>
                    <img src={base64} alt={`Stamp ${id}`} />
                </div>
            ))}
            
        </article> */}
    </div>
  )
}

export default FelizNavidad