import qr from '../assets/img/qr.png'

const Codigo = () => {

  return (
    <div className='text-center'>
      <p className='font-bold text-xl -mt-10 relative mb-10'>Código QR</p>

      <img src={qr} alt="qr" />

      <button className="mt-10">Generar otro codigo QR</button>

    </div>
  )
}

export default Codigo