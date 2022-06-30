import { Link } from "react-router-dom"
import tneLogo from '../assets/img/tneLogo.png'

const IniciarSesion = () => {
  return (
    <main className="bg-orange-400 h-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-14">Inicio de sesión</h2>

        <div className="flex flex-col gap-3">
            <label className="" htmlFor="rut">Rut</label>
            <input type="text" />
        </div>
        <div className="flex flex-col gap-3 mt-10">
            <label className="" htmlFor="rut">Contraseña</label>
            <input type="text" />
        </div>
        <p className="mt-10 text-sm mb-10">Olvidé mi contraseña</p>

        <Link to="/user" className="bg-white px-10 py-3 rounded-3xl"> Iniciar </Link>

        <img src={tneLogo} alt="tne logo" className="mt-20" />
        
    </main>
  )
}

export default IniciarSesion