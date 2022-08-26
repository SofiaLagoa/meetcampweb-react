import './App.css';
import Button from './components/Button';

function App() {

  const handleClick = ()=> {
    alert("Gaurdado exitoso")
  }

  return (
    <div className="App">
        <p>Te damos la bienvenida</p>
        <Button text="Guardar" onClick={handleClick}/>
        <Button text="Cancelar" onClick={()=> alert("Su operacion fue cancelada")}/>
    </div>
  );
}

export default App;
