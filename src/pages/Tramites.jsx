import { Link } from "react-router-dom"

const Tramites = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold -mt-10 mb-20 relative">Tramites</h2>
      <Link to={''} className="border-solid border-2 border-orange-500 block p-2 bg-orange-400 font-bold mb-4">
        Tomate la foto
      </Link>
      <Link to={''} className="border-solid border-2 border-orange-500 block p-2 bg-orange-400 font-bold mb-4">
        Actualizar tu sello
      </Link>
      <Link to={''} className="border-solid border-2 border-orange-500 block p-2 bg-orange-400 font-bold mb-4">
        Revalida tu pase escolar
      </Link>
      <Link to={''} className="border-solid border-2 border-orange-500 block p-2 bg-orange-400 font-bold mb-4">
        Paga tu pase escolar
      </Link>


    </div>
  )
}

export default Tramites