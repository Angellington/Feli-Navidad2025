
import './styles/css/root/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Form from './components/Form.jsx'
import FelizNavidad from './components/FelizNavidad.jsx'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} /> {/* Página Principal */}
        <Route path="/feliz-navidad" element={<FelizNavidad />} /> {/* Página de Resultado */}
      </Routes>
    </Router>
  )
}

export default App
