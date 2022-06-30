import QRCode from "react-qr-code";

const Codigo = () => {

  return (
    <div className='text-center'>
      <p className='font-bold text-xl -mt-10 relative mb-10'>Código QR</p>

      <QRCode value="https://javimx.netlify.app/" className="mx-auto mt-20"/>

      <button className="mt-10">Generar otro codigo QR</button>

    </div>
  )
}

export default Codigo