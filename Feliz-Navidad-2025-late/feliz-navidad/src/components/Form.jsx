import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stamps from './stamps/Stamps'
import { useNavigate } from "react-router-dom";
 
const Form = () => {
    const navigate = useNavigate();

    const [stamps, setStamps] = useState({});

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        // Fazer verificação Manual
        const requiredStamps = ['1', '2', '3', '4'];
        
        
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

            <input type="submit" value="Enviar" />
        </form>
    )
}

export default Form