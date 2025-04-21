import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FelizNavidad = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { stamps } = location.state || {}; // Desestruturação do state, caso não tenha, será undefined

    const handleClick = () => {
        navigate("/");
    }

  return (
    <div>
        <h2>Feliz Navidad 2025</h2>
        <button onClick={handleClick}>VOLTAR</button>
        <article>
            <h3>Imagens Recebidas</h3>
            {stamps && Object.entries(stamps).map(([id, base64]) => (
                <div key={id}>
                    <h4>Imagem {id}</h4>
                    <img src={base64} alt={`Stamp ${id}`} />
                </div>
            ))}
            
        </article>
    </div>
  )
}

export default FelizNavidad