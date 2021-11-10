import logo from './logo.svg';
import './Styles/Styles.css';

function App() {
  return (
    <div className="App">
      <div className="loginDiv">
        <form className="form">
          <p className="loginP">Iniciar sesión</p>
          <input type="text" name="Usuario" placeholder="Usuario" className="userClass"></input>
          <input type="password" name="Contraseña" placeholder="Contraseña" className="passwordClass"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
