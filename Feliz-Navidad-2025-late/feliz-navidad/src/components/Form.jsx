import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stamps from './stamps/Stamps';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
 
const Form = () => {
    const navigate = useNavigate();
    const [stamps, setStamps] = useState({});
    const [message, setMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        // Fazer verificação Manual
        if(Object.keys(stamps).length == 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Escolha pelo menos uma estampa!",
              });
            return;
        }
        navigate("/feliz-navidad", {
            state: { stamps, name, message }
        });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Feliz Navidad 2025</h2>
            <div className="Textfields">
                <TextField 
                required 
                id="outlined-basic" 
                label="Mensagem" 
                name="message" 
                variant="outlined" 
                multiline
                fullWidth
                rows={2}
                value={message} 
                onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <Stamps onChange={setStamps}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form