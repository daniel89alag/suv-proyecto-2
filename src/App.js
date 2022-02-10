import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Empresa deportiva</h1>
          <ul className="Roc">
            <li className="dr"><a href="#home">Expedientes</a></li>
            <li className="dr"><a href="#news">Bajas</a></li>
            <li className="dr"><a href="#contact">Pagos</a></li>
            <li className="dr"><a href="#about">Reportes</a></li>
          </ul>
        <img src={logo} className="App-logo" alt="logo" />     
      </header>
    </div>
  );
}

export default App;
