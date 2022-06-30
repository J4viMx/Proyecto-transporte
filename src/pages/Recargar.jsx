import {Link} from 'react-router-dom'

const Recargar = () => {
  return (
    <div className='text-center'>
      
      <p className='font-bold text-xl relative -mt-10'>Recarga tu tarjeta</p>

      <div className='mt-20 flex flex-col'>
        <label htmlFor="monto" className='mb-4'>Elige un monto</label>
        <input type="number" id='monto' className='border-solid border-2 border-orange-500 w-72 mx-auto' />
      </div>
      <div className='mt-10 mb-20 flex flex-col'>
        <label htmlFor="email" className='mb-4'>Ingresa tu email</label>
        <input type="email" id='email' className='border-solid border-2 border-orange-500 w-72 mx-auto' />
      </div>

      <Link to="/user/opcionesPago" className='border-solid border-2 border-orange-400 block p-2 bg-orange-200 font-bold w-80 mx-auto' >Cargar Monto</Link>

    </div>
  )
}

export default Recargar