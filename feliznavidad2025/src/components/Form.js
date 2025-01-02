import Imagesput from './images';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/form.css'


// Functions



const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        alert("Botao acionado!")
    };

    return (
        <form onSubmit={handleSubmit}>
          <h1>Feliz Navidad! Feliz Navidad</h1>
          <div class="fields">
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField id="outlined-basic" label="Mensagem" variant="outlined" multiline rows={4} />
          </div>
          <h1 style={{ textAlign: 'left', margin: 0}}>Estampas</h1>
          <Imagesput/>
            <div class="btn-submit" style={{ width: '100%' }}>
                <Button type='submit' variant="contained">Criar Painel</Button>
            </div>

        </form>
    )
}

export default Form