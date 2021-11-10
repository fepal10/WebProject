import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="loginDiv">
        <form class="form">
          <p class="loginP">Iniciar sesión</p>
          <input
            type="text"
            name="Usuario"
            placeholder="Usuario"
            class="userClass"
          ></input>
          <input
            type="password"
            name="Contraseña"
            placeholder="Contraseña"
            class="passwordClass"
          ></input>
          <button type="submit" class="boton1">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
