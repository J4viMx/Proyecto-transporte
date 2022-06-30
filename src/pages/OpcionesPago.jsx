import webpay from '../assets/img/webpaylogo.png'
import onepay from '../assets/img/onepay.png'
import { Link } from 'react-router-dom'

const OpcionesPago = () => {
  return (
    <div className='text-center font-bold'>
      <div className='-mt-20 relative'>
        <h2 >Monto a pagar</h2>
        <p>$1.000</p>
      </div>
      <img className='mx-auto mt-10' src={webpay} alt="webpay" />
      <div className='grid grid-cols-2 mt-10 gap-10'>
        <Link to="/user/resumen">
          <img src={onepay} alt="onePay" /> 
        </Link>
        <Link to="/user/resumen">
            <div>
              <i className="bi bi-credit-card-2-front text-5xl"></i>
              <p>Debito</p>
            </div>
        </Link>

        <Link to="/user/resumen">
          <div>
            <i className="bi bi-credit-card-2-front text-5xl"></i>
            <p>Crédito</p>
          </div>
        </Link>

        <Link to="/user/resumen">
          <div className='mb-10'>
            <i className="bi bi-credit-card-2-front text-5xl"></i>
            <p>Prepago</p>
          </div>
        </Link>
      </div>

      <Link to="/user"> &#8592; Anular compra y volver al comercio</Link>

    </div>
  )
}

export default OpcionesPago