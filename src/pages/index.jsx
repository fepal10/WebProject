
function Index() {
    return (
      <div className="loginDiv">
        <form className="form">
            <p className="loginP">Iniciar sesión</p>
            <input type="text" name="Usuario" placeholder="Usuario" className="userClass"></input>
            <input type="password" name="Contraseña" placeholder="Contraseña" className="passwordClass"></input>
        </form>
        </div>
    )    
}
export default Index;