import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full bg-orange-300 h-28">

        <nav className='grid grid-cols-4 min-h-full'>
            <Link to="/user/tramites" className='flex content-center justify-center'>
                <div className='flex flex-col justify-center content-center gap-6 text-center cursor-pointer'>
                    <p className='font-bold'>Trámites</p>
                    <i className="bi bi-files text-4xl block"></i>
                </div>
            </Link>

            <Link to="/user/saldo" className='flex content-center justify-center'>
            <div className='flex flex-col justify-center content-center gap-6 text-center cursor-pointer'>
                <p className='font-bold'>Saldo</p>
                <i className="bi bi-currency-dollar text-4xl block"></i>
            </div>
            </Link>
            <Link to="/user/codigo" className='flex content-center justify-center'>
                <div className='flex flex-col justify-center content-center gap-6 text-center cursor-pointer'>
                    <p className='font-bold text-sm'>Genera tu QR</p>
                    <i className="bi bi-qr-code-scan text-4xl block"></i>
                </div>
            </Link>

            <Link to="/user/recargar" className='flex content-center justify-center'>
                <div className='flex flex-col justify-center content-center gap-6 text-center cursor-pointer'>
                    <p className='font-bold text-sm'>Carga tu TNE</p>
                    <i className="bi bi-arrow-clockwise text-4xl block"></i>
                </div>
            </Link>

        </nav>

    </div>
  )
}

export default Footer