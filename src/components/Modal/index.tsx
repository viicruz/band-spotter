export function Modal() {
  return (
    <div className='flex flex-col p-4 gap-6 items-center  border-2 rounded-lg border-black  '>
      <h1 className='font-bold text-3xl text-black pb-3'>
        Contrate este artista
      </h1>
      <div className='w-[478px] h-16 border border-black rounded-lg' />

      <div className='items-start w-full h-full pt-6 gap-6 flex flex-col'>

        <section className='w-full gap-2 flex flex-col '>

          <div className='flex flex-col gap-1'>
            <h2 className='text-black text-base font-bold pb-1'>Nome do contratante</h2>
            <input type="text" className='border-2 border-black' />
          </div>


          <div className="flex flex-col gap-1">
            <h2 className='text-black text-base font-bold pb-1'>Cache para o artista</h2>
            <input type="text" className='border-2 border-black' />
          </div>


          <div className="flex flex-col gap-1">
            <h2 className='text-black text-base font-bold pb-1'>Data do vento</h2>
            <input type="text" className='border-2 border-black' />
          </div>


        </section>

        <section className='w-full py-2 flex flex-col'>

          <div className='gap-2 flex '>

            <div className='py-1'>
              <h2 className='font-bold text-black'>
                Cep
              </h2>
              <input type="text" className="border-2 border-black" />
            </div>

            <div className='py-1'>
              <h2 className='font-bold text-black'>
                Número
              </h2>
              <input type="text"  className="border-2 border-black"/>
            </div>

          </div>

          <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-black'>
                Rua/Logradouro
              </h2>
              <input type="text" className="border-2 border-black"/>
            </div>

            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-black'>
                Bairro
              </h2>
              <input type="text" className="border-2 border-black" />
            </div>

            <div className=' gap-2 flex'>

            <div className='py-1'>
              <h2 className='font-bold text-black'>
                Cidade
              </h2>
              <input type="text" className="border-2 border-black" />
            </div>

            <div className='py-1'>
              <h2 className='font-bold text-black className="border-2 border-black"'>
                Estado
              </h2>
              <input type="text" className="border-2 border-black" />
            </div>
            
          </div>

        </section>

      </div>
        <button className="p-2 bg-purple-800">Contratar</button>
    </div>
  );
}