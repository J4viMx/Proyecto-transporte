import tne from '../assets/img/tne.png'
import sello from '../assets/img/sello.png'

const Resume = () => {

  return (
    <div>
      <img src={tne} alt="tne" className='max-w-full -mt-10 relative z-20' />

      <div className='grid grid-cols-2 mt-5'>
        <div className='border-solid border-r-2 border-gray-400'>
          <div className='text-center border-solid border-b-2 pb-3 border-gray-400'>
            <p>Últimos movimientos</p>
            <div className='flex justify-center items-center gap-5'>
              <i className="bi bi-credit-card-2-back text-6xl"></i>
              <p className='font-bold'>Cargas</p>
            </div>
          </div>

            <div className='text-center my-5 '>
              <p>Últimos movimientos</p>
              <div className='flex justify-center items-center gap-5'>
                  <i className="bi bi-cone-striped text-6xl"></i>
                  <p className='font-bold'>Viajes</p>
              </div>
            </div>
        </div>
        
        
        <div className='text-center flex items-center flex-col'>
          <p>Sello actual</p>
          <img src={sello} alt="sello" className='w-40' />
        </div>
      </div>

    </div>
  )
}

export default Resume