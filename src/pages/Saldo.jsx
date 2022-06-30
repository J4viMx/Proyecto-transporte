

const Saldo = () => {
  return (
    <>
    <div className="mb-10">
      <div className="flex justify-around mt-10">
        <p className="font-bold">Saldo:</p>
        <p>$1.000</p>
      </div>
      <div className="flex justify-around mt-10">
        <p className="font-bold">Numero de tarjeta:</p>
        <p>0000000</p>
      </div>
    </div>

    <div className="w-96 text-center">
      <p>Últimos movimientos</p>

      <div className="flex justify-around items-center mt-10 border-solid border-b-2 border-gray-200 pb-3">
        <div className="flex gap-5">
          <i className="bi bi-credit-card-2-front text-5xl"></i>
          <div className="">
            <p className="font-bold text-lg">Carga</p>
            <p className="text-sm">25/06/22</p>
          </div>
        </div>
        <p>+$1.000</p>
      </div>

      <div className="flex justify-around items-center mt-10 border-solid border-b-2 border-gray-200 pb-3">
        <div className="flex gap-5">
          <i className="bi bi-truck text-5xl"></i>
          <div className="">
            <p className="font-bold text-lg">Viaje</p>
            <p className="text-sm">25/06/22</p>
          </div>
        </div>
        <p>-$230</p>
      </div>
    </div>
    </>
  )
}

export default Saldo