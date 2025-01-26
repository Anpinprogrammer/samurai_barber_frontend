import { Link } from "react-router-dom";

const BtnLoginRegis = () => {
  return (
    <div>
        <Link
            to="/admin"
            className="text-white text-md uppercase"
        >
            Iniciar Sesion
        </Link>
        <button
            type="button"
            className="text-white text-md uppercase"
        >
            Registrarme
        </button>
    </div>
  )
}

export default BtnLoginRegis