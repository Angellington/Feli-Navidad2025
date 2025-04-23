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

// import dos happy Navidad
import Happy1 from '../assets/felizrandom/happy1.png'
import Happy2 from '../assets/felizrandom/happy2.png'
import Happy3 from '../assets/felizrandom/happy3.png'
import Happy4 from '../assets/felizrandom/happy4.png'
import Happy5 from '../assets/felizrandom/happy5.png'
import Happy6 from '../assets/felizrandom/happy6.png'
import Happy7 from '../assets/felizrandom/happy7.png'
import Happy8 from '../assets/felizrandom/happy8.png'


const FelizNavidad = ( ) => {
    // Lista das imagens
    const images_list = [ Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 ];
    const happy_list = [ Happy1, Happy2, Happy3, Happy4, Happy5, Happy6, Happy7, Happy8 ];


    let rand_images = Math.floor(Math.random() * images_list.length);
    let rand_happy = Math.floor(Math.random() * happy_list.length);
    // Imagens 

    const location = useLocation();


    const navigate = useNavigate();

    const { stamps } = location.state || {}; // Desestruturação do state, caso não tenha, será undefined

    const { name, message } = location.state || {}; // Desestruturação do state, caso não tenha, será undefined



    const handleClick = () => {
        navigate("/");
    }

  return (
    <div>
        <article className="container-image" style={{ backgroundImage: `url(${images_list[rand_images]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <img src={happy_list[rand_happy]} alt="Feliz Navidad" className="tittle"/>
            <div className="title-name">
                <h2>{name}</h2>
            </div>
            <div className="message">
                <h3>{message}</h3>
            </div>
            
            <img src={stamps[1]} alt="Selo 1" id="img1"/>
           

            {/* <div className="img2">
                <img src={img2} alt="Selo 2" className="stamp2"/>
            </div>
            <div className="img3">
                <img src={img3} alt="Selo 3" className="stamp3"/>
            </div>
            <div className="img4">
                <img src={img4} alt="Selo 4" className="stamp4"/>
            </div> */}

        </article>

        <button onClick={handleClick}>VOLTAR</button>
    </div>
  )
}

export default FelizNavidad