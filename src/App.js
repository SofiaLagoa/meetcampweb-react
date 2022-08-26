import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Te damos la bienvenida
        </p>
        <Button text="Soy un boton"/>
      </header>
    </div>
  );
}

export default App;
