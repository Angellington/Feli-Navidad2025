import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stamps from './stamps/Stamps'
import { useNavigate } from "react-router-dom";
 
const Form = () => {
    const navigate = useNavigate();
    const [stamps, setStamps] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        // alert("Enviando")

        navigate("/feliz-navidad", {
            state: { stamps }
        });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Feliz Navidad 2025</h2>

            <div className="Textfields">
                <TextField id="outlined-basic" label="Nome" variant="outlined" />
                <TextField id="outlined-basic" label="Mensagem" variant="outlined" />
            </div>

            <Stamps onChange={setStamps}/>

            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Form