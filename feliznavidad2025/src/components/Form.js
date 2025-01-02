import Imagesput from './images';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Functions



const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        alert("Botao acionado!")
    };

    return (
        <form onSubmit={handleSubmit}>
          <h1>Feliz Navidad! Feliz Navidad</h1>
          <TextField id="outlined-basic" label="Nome" variant="outlined" />
          <TextField id="outlined-basic" label="Mensagem" variant="outlined" />
          <Imagesput/>
          <Button type='submit' variant="contained">Contained</Button>

        </form>
    )
}

export default Form