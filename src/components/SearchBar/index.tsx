'use client'
//Libraries Imports
import { useState, useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function SearchBar() {
  const [show, setShow] = useState(false);
  const parent = useAutoAnimate()[0];

  const reveal = () => setShow(!show)
  return (
    <div className='border-2 w-full max-w-[512px] flex flex-row gap-3 pl-3 pr-3 rounded-lg bg-white overflow-hidden '>
      <button>
        <MagnifyingGlass size={24} color='black' />
      </button>
      <div onClick={reveal} className='w-full px-6 flex flex-col'>

        <input className='w-full h-11 text-start text-black placeholder-black outline-none' type="text" placeholder='Digite o nome do artista' />

        <button ref={parent} className='text-start overflow-hidden'>
          {
            show && <p className='w-full h-8 text-black'>Testando........</p>
          }
        </button>

      </div>
    </div>
  )

  //Basicamente, to usando o hooke do useanimate e ele ta funcionando, mas tipo ele ta tando aquele b.o, a animação ta dura e da layout shift, para de ler meu texto igual robô
  // essa div só segura o input e o botão que no caso é o ícone para com isso 
  //peguei aquele exemplo la da documentaão dos cara, só adaptei
}