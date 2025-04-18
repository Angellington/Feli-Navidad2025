import TextField from "@mui/material/TextField";
import Stamps from './stamps/Stamps'

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Feliz Navidad 2025</h2>

            <TextField id="outlined-basic" label="Nome" variant="outlined" />

            <TextField id="outlined-basic" label="Mensagem" variant="outlined" />

            <Stamps />


        </form>
    )
}

export default Form