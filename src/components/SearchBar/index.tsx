'use client'
//Libraries Imports
import { useState, useRef } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { ChangeEvent } from 'react'


//Components Imports
import { SearchCard } from '../SearchCard';

const listData = [1, 2, 3, 4, 5];

export function SearchBar() {
  const [show, setShow] = useState(false);
  const parent = useAutoAnimate({ duration: 500, easing: 'ease-in-out' })[0];
  const [text, setText] = useState('');

  const reveal = (e: ChangeEvent<HTMLInputElement>) => {
    const inputText: string = e.target.value;
    setText(inputText);
    setShow(inputText.length > 0);
  }

  return (
    <div className='border-2 w-full max-w-[512px] flex flex-col pl-3  pr-3 rounded-lg  bg-white overflow-hidden '>
      <div className='flex items-center gap-3'>
        <MagnifyingGlass className='tex-base text-black' />
        <input onChange={reveal} className='w-full h-11 text-start text-black placeholder-black outline-none bg-transparent' type="text" placeholder='Digite o nome do artista' />
      </div>
      <div ref={parent} className='text-start overflow-hidden'>
        {
          show && <div className='w-full p-0 text-black bg-white border-t-2 border-neutral-200'>
            <ul>
              <li className='pt-2 pb-2 flex gap-2 flex-col'>
                {listData.map((data, index) => (
                  <SearchCard key={index} />
                ))}
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}