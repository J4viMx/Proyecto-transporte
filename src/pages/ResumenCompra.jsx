import webpay from '../assets/img/webpaylogo.png'
import { Link } from 'react-router-dom'

const ResumenCompra = () => {
  return (
    <div className="text-center">
        <h2 className="font-bold text-xl -mt-10 relative">Resumen</h2>

        <p className='mt-10 text-xl'>Verifica los datos de tu recarga</p>

        <p className='mt-5'>Tarjeta: <span>00000</span> </p>
        <p className='mt-5'>Monto a pagar <span>$1.000</span> </p>
        <p className='mt-5'>Email: <span>correo@correo.com</span></p>
        <p className='mt-5'>No. orden: <span>00000</span> </p>
        <img className='mx-auto my-10' src={webpay} alt="webpay" />
        <Link to="/user" className='border-solid border-2 border-orange-400 block p-2 bg-orange-200 font-bold w-80 mx-auto' >Terminar Compra</Link>
    </div>
  )
}

export default ResumenCompra